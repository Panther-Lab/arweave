import Image from 'next/image';
import raft_footer_logo from '@/public/logonew.svg';
import qr_code from '@/public/qr_code.jpg';
import ic_google_playstore from '@/public/ic_google_playstore.svg';
import ic_baseline_apple from '@/public/ic_baseline_apple.svg';
import ic_chevron_down from '@/public/ic_chevron_down.svg';
import ic_copyright from '@/public/ic_copyright.svg';

const linksArr = [
  {
    title: 'Build On',
    links: ['Arweave', 'AO'],
  },
];

const socialLinks = [
  {
    name:"Nisarg",
    link:"https://x.com/itznishuu_",

  },
  {
    name:"Pawan",
    link:"https://x.com/k_ajjar",
  }
];

const contactLinks=[
  {
    name:"Email us",
    link:"mailto:pixelgamingao@gmail.com"
  },
  {
    name:"Message us",
    link:"https://x.com/pixelgamingao"
  }
]

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
                <Image src={qr_code} alt="qr_code" className='h-32 w-32' />
              </QRImageCtn>
              <TextCtn className='flex text-center align-middle items-center'>
                <p>Scan to give us feedback</p>
              </TextCtn>
            </QRContainer>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3 className='text-xl'>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>{link}</li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
              <GridColumn>
                <h3 className='text-xl'>Team Social</h3>
                <LinksContainer>
                  {socialLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.link} target="_blank" rel="noreferrer">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </LinksContainer>
              </GridColumn>
              <GridColumn>
                <h3 className='text-xl'>Contact</h3>
                <LinksContainer>
                  {contactLinks.map((link, i) => (
                    <li key={i}>
                      <a href={link.link} target="_blank" rel="noreferrer">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </LinksContainer>
              </GridColumn>
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              Pixel Gaming, LLC.
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
