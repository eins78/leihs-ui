import React from 'react'
import PageLayout from './PageLayout'
import Navbar from './Navbar'
import FilterSummary from './FilterSummary'
import Section from './Section'
import { ImageThumbnail } from './ImageThumbnail'
import ListAsGridSquare from './ListAsGridSquare'

export default {
  title: 'MobileApp/Wireframes2021/Components',
  parameters: { layout: 'fullscreen' }
}

export const page_layout = () => <PageLayout title="Titel" preTitle="Kontext">Lorem ipsum...</PageLayout>

export const navbar = () => <Navbar />

export const filter_summary = () => <FilterSummary />

export const section = () => <Section title="Titel" >Lorem ipsum...</Section>

export const sectionCollapsible = () => <Section title="Titel" collapsible="true" >Lorem ipsum...</Section>

export const imageThumbnail = () => <ImageThumbnail />

const listGridProps = {
  list: [
    {
      id: 1,
      href: null,
      imgSrc: null,
      caption: "Item 1"
    },
    {
      id: 2,
      href: null,
      imgSrc: null,
      caption: "Item 2"
    },
    {
      id: 3,
      href: null,
      imgSrc: null,
      caption: "Item 3 with much text text text"
    },
  ]
}
export const listAsGridSquare = () => <ListAsGridSquare {...listGridProps} />