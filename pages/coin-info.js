import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Layout from '../shared/components/layout'

export default function CoinInfo() {
  return (
    <Layout
      title="Idena Coin Info (iDNA)"
      description="Idena Coin Info (iDNA)"
      scripts={
        <script src="https://crypto.com/price/static/widget/index.js"></script>
      }
    >
      <section
        className="section section_content menu_section_content menu_join_idena"
        id="coin-info"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-6">
              <div className="">
                <h3 className="h1">Idena Coin Information (iDNA)</h3>
                <p className="text-center" style={{color: '#96999E'}}>
                  iDNA is the native cryptocurrency of the Idena Proof-of-Person
                  blockchain
                </p>
              </div>
              <script src="https://crypto.com/price/static/widget/index.js"></script>
              <div
                id="crypto-widget-CoinList"
                data-transparent="true"
                data-design="classic"
                data-coins="idena"
              ></div>
              <h4>Project name</h4>
              <p>Idena Network</p>
              <h4>Asset Name</h4>
              <p>Idena</p>
              <h4>Ticker Name</h4>
              <p>IDNA</p>
              <h4>Decimal</h4>
              <p>18</p>
              <h4>Ticker Name</h4>
              <p>IDNA</p>
              <h4>Asset type</h4>
              <p>Native cryptocurrency</p>
              <h4>Is asset a security?</h4>
              <p>No</p>

              <h4>Official blockchain explorer</h4>
              <p>
                <a rel="noreferrer nofollow" href="http://scan.idena.io/">
                  http://scan.idena.io/
                </a>
              </p>
              <h4>Github repo</h4>
              <p>
                <a
                  rel="noreferrer nofollow"
                  href="https://github.com/idena-network"
                >
                  https://github.com/idena-network
                </a>
              </p>

              <h4>Whitepaper</h4>
              <p>
                <a
                  rel="noreferrer nofollow"
                  href="https://docs.idena.io/docs/wp/summary/"
                >
                  https://docs.idena.io/docs/wp/summary
                </a>
              </p>

              <h4>Network launch date</h4>
              <p>August 2019</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['index', 'common'])),
  },
})
