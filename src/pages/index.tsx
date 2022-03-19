import * as React from "react"
import Layout from "../layout";
import BuildingCommunity from "../components/hero-sections/buildingCommunity";
import { getAssetInfo } from "../utils/algoIndexer";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <BuildingCommunity />
    </Layout>
  )
}

export default IndexPage
