import React from 'react';

import Layout from '../layout';
import Seo from '../components/seo';

function NotFoundPage() {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <h1>Aradığın Sayfayı Bulamadım!</h1>
      <p>Yolunu kaybetmiş gibi görünüyor. İstersen yukarıdaki menüyü birazcık kurcalayabilirsin :)</p>
    </Layout>
  );
}

export default NotFoundPage;
