// @ts-nocheck
import React from 'react';
import Icons from '@stackoverflow/stacks-icons';
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
    <View as="header" className="bg-black-050">
      <View as="h1" className="ai-center d-flex fs-title fw-normal px24 py12">
        <Icon isNative className="mr16">
          {Icons.LogoGlyphMd}
        </Icon>
        <Link href="/" variant="grayscale">
          {title}
        </Link>
      </View>
    </View>
    {version && <h2>{version}</h2>}
    <div className="d-flex sm:d-block px16 wmn2">
      {hasSidebar ? <Navigation className="w3 pr8">{toc}</Navigation> : null}
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
