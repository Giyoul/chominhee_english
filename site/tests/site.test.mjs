import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import { test } from 'node:test';

const pagePath = new URL('../app/page.tsx', import.meta.url);
const globalStylePath = new URL('../app/globals.css', import.meta.url);
const sectionStylePath = new URL('../app/site-sections.css', import.meta.url);
const publicRoot = new URL('../public/', import.meta.url);

test('핵심 콘텐츠와 상담 흐름을 제공한다', async () => {
  const page = await readFile(pagePath, 'utf8');
  const expectedContent = [
    '기본은 탄탄하게',
    '품사',
    '문장 구조',
    '학부모가 직접 전한 이야기',
    '전화 상담',
    '네이버 톡 문의',
    '조민희영어 산운초 캠퍼스',
    '031-8016-5715',
  ];

  expectedContent.forEach((content) => assert.match(page, new RegExp(content)));
});

test('한 페이지의 주요 이동 지점을 모두 제공한다', async () => {
  const page = await readFile(pagePath, 'utf8');
  const expectedSections = ['top', 'philosophy', 'program', 'reviews', 'director', 'contact'];

  expectedSections.forEach((section) => assert.match(page, new RegExp(`id="${section}"`)));
});

test('상담 채널과 개인정보 보호 처리를 제공한다', async () => {
  const page = await readFile(pagePath, 'utf8');

  assert.match(page, /tel:03180165715/);
  assert.match(page, /naver\.me\/FvFuFl54/);
  assert.match(page, /talk\.naver\.com\/ct\/w5wsk7/);
  assert.match(page, /instagram\.com\/reel\/Dbjoudpzlfg/);
  assert.match(page, /face-mask/);
  assert.doesNotMatch(page, /카카오/);
});

test('제목을 의미 단위로 유지하고 후기 얼굴을 사진별로 가린다', async () => {
  const page = await readFile(pagePath, 'utf8');
  const globalStyle = await readFile(globalStylePath, 'utf8');
  const sectionStyle = await readFile(sectionStylePath, 'utf8');

  assert.equal(page.match(/hero-title-line/g)?.length, 2);
  assert.match(globalStyle, /word-break: keep-all/);
  ['confidence', 'basics', 'middle', 'consistency'].forEach((name) => {
    assert.match(sectionStyle, new RegExp(`\\.mask-${name} \\.face-mask`));
  });
});

test('페이지가 참조하는 이미지가 모두 존재한다', async () => {
  const page = await readFile(pagePath, 'utf8');
  const paths = [...page.matchAll(/['"]\/images\/([^'"]+)['"]/g)].map((match) => match[1]);

  assert.ok(paths.length > 0);
  await Promise.all([...new Set(paths)].map((path) => access(new URL(`images/${path}`, publicRoot))));
});
