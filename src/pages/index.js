import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Pdfvieweer from "../components/Pdf/Pdfvieweer"
// import Wiewpdf from "../components/Pdf/Wiewpdf"
// import ReactPdfViewer from "../components/Pdf/ReactPdfViewer"
// import Mapa1 from "../components/Mapa/Mapa1"
// import Filtro from "../components/Filtro/Filtro"
// import Buscador from "../components/Filtro/Buscador"
// import ScrollAnimation from "../components/Scroll/ScrollAnimation"
// import ArchivoPdf from "../components/Pdf/ArchivoPdf"
// import PdfObject from "../components/Pdf/PdfObject"
// import Step from "../components/Step/Step"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/*<Mapa1/>*/}
    {/*<Filtro/>*/}
    {/*<Buscador/>*/}
    {/*<ScrollAnimation/>*/}
    {/*<ArchivoPdf/>*/}
    {/*<PdfObject/>*/}
    {/*<Step/>*/}
    {/*<ReactPdfViewer/>*/}
    {/*<Wiewpdf/>*/}
    <Pdfvieweer/>
  </Layout>
)

export default IndexPage
