import Image from 'next/image';
import raft_footer_logo from '@/public/logonew.svg';
import qr_code from '@/public/qr_code.svg';
import ic_google_playstore from '@/public/ic_google_playstore.svg';
import ic_baseline_apple from '@/public/ic_baseline_apple.svg';
import ic_chevron_down from '@/public/ic_chevron_down.svg';
import ic_copyright from '@/public/ic_copyright.svg';

const linksArr = [
  {
    title: 'Build On',
    links: ['Arweave', 'AO'],
  },
  {
    title: 'Contact',
    links: ['Email us', 'Message us'],
  },
  {
    title: 'Team',
    links: ['Nisarg', 'Pawan'],
  },
];

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  QRContainer,
  QRImageCtn,
  TextCtn,
  IconCtn,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
  CopyRight,
} from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterLogo>
          <Image src={raft_footer_logo} alt="raft_footer_logo" />
        </FooterLogo>
        <FooterMainContent>
          <FooterMiddle>
            <QRContainer>
              <QRImageCtn>
                <Image src={qr_code} alt="qr_code" />
              </QRImageCtn>
              <TextCtn className='text-center align-middle'>
                <p>Scan to give us feedback</p>
              </TextCtn>
            </QRContainer>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>{link}</li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              Griffin Corp, LLC.
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
