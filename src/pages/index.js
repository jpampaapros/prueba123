import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Mapa1 from "../components/Mapa/Mapa1"
import Filtro from "../components/Filtro/Filtro"
import Buscador from "../components/Filtro/Buscador"
import ScrollAnimation from "../components/Scroll/ScrollAnimation"
import ArchivoPdf from "../components/Pdf/ArchivoPdf"
import ViewerPdf from "../components/Pdf/ViewerPdf"
import Step from "../components/Step/Step"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/*<Mapa1/>*/}
    {/*<Filtro/>*/}
    {/*<Buscador/>*/}
    {/*<ScrollAnimation/>*/}
    {/*<ArchivoPdf/>*/}
    <ViewerPdf/>
    {/*<Step/>*/}
  </Layout>
)

export default IndexPage
