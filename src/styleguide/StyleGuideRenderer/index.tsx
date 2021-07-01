// @ts-nocheck
import React from 'react';
import { Icon, Link, Navigation, View } from 'src/components/index';

const StyleGuideRenderer = ({
  title,
  version,
  homepageUrl,
  children,
  toc,
  hasSidebar,
}: {
  title: string;
  version: string;
  homepageUrl: string;
  children: any;
  toc: any;
  hasSidebar: boolean;
}) => (
  <View className="root theme-system">
    <View as="header" className="bg-black-050 bb bc-black-3 h64">
      <View as="h1" className="ai-center d-flex fs-title fw-normal px24 py12">
        <View as="span" className="mr16">
          <Icon name="LogoGlyphMd" native />
        </View>
        <Link href="/" variant="grayscale">
          {title}
        </Link>
      </View>
    </View>
    {version && <h2>{version}</h2>}
    <div className="d-flex sm:d-block px16 py12 wmn2">
      {hasSidebar ? (
        <Navigation className="fl-shrink0 pr8 w3">{toc}</Navigation>
      ) : null}
      <main className="fl-grow1 pb24 pl48 wmx9">
        {children}
        <footer className="footer">
          Created with {/* @ts-ignore */}
          <Link href={homepageUrl}>React Styleguidist</Link> and{' '}
          {/* @ts-ignore */}
          <Link href="https://stackoverflow.design/">Stacks</Link>.
        </footer>
      </main>
    </div>
  </View>
);

export default StyleGuideRenderer;
