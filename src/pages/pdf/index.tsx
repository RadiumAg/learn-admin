import React from 'react';
import Item from './components/items';
import Styles from './index.module.scss';

const Pdf: React.FC = () => {
  const [pdfs, setPdfs] = React.useState([
    {
      id: '1',
      name: '深入浅出Node.js.pdf',
      url: 'https://tmysm.oss-cn-beijing.aliyuncs.com/pdf/books/654240%20CSS%E4%B8%96%E7%95%8C%20%2C%E5%BC%A0%E9%91%AB%E6%97%AD.pdf',
      cover:
        'https://tmysm.oss-cn-beijing.aliyuncs.com/pdf/books/1717772312564%281%29.jpg',
    },
    {
      id: '2',
      name: '写给大家看的设计书(jb51.net)',
      url: 'https://tmysm.oss-cn-beijing.aliyuncs.com/pdf/books/654240%20CSS%E4%B8%96%E7%95%8C%20%2C%E5%BC%A0%E9%91%AB%E6%97%AD.pdf',
      cover:
        'https://tmysm.oss-cn-beijing.aliyuncs.com/pdf/books/1717772312564%281%29.jpg',
    },
    {
      id: '3',
      name: '写给大家看的设计书(jb51.net)',
      url: 'https://tmysm.oss-cn-beijing.aliyuncs.com/pdf/books/654240%20CSS%E4%B8%96%E7%95%8C%20%2C%E5%BC%A0%E9%91%AB%E6%97%AD.pdf',
      cover:
        'https://tmysm.oss-cn-beijing.aliyuncs.com/pdf/books/1717772312564%281%29.jpg',
    },
    {
      id: '3',
      name: '写给大家看的设计书(jb51.net)',
      url: 'https://tmysm.oss-cn-beijing.aliyuncs.com/pdf/books/654240%20CSS%E4%B8%96%E7%95%8C%20%2C%E5%BC%A0%E9%91%AB%E6%97%AD.pdf',
      cover:
        'https://tmysm.oss-cn-beijing.aliyuncs.com/pdf/books/1717772312564%281%29.jpg',
    },
    {
      id: '4',
      name: '写给大家看的设计书(jb51.net)',
      url: 'https://tmysm.oss-cn-beijing.aliyuncs.com/pdf/books/654240%20CSS%E4%B8%96%E7%95%8C%20%2C%E5%BC%A0%E9%91%AB%E6%97%AD.pdf',
      cover:
        'https://tmysm.oss-cn-beijing.aliyuncs.com/pdf/books/1717772312564%281%29.jpg',
    },
    {
      id: '5',
      name: '写给大家看的设计书(jb51.net)',
      url: 'https://tmysm.oss-cn-beijing.aliyuncs.com/pdf/books/654240%20CSS%E4%B8%96%E7%95%8C%20%2C%E5%BC%A0%E9%91%AB%E6%97%AD.pdf',
      cover:
        'https://tmysm.oss-cn-beijing.aliyuncs.com/pdf/books/1717772312564%281%29.jpg',
    },
  ]);

  const pdfsItems = pdfs.map((pdf, key) => <Item key={key} {...pdf} />);

  return <div className={Styles.pdfWrapper}>{pdfsItems}</div>;
};

export default Pdf;
