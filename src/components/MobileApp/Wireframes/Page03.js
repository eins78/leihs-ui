import React from 'react'
import FilterSummary from './Components/FilterSummary'
import ListAsGridSquare from './Components/ListAsGridSquare'
import PageLayout from './Components/PageLayout'
import Section from './Components/Section'

export const subCategoryListProps = {
  list: [
    {
      id: '78920f6d-57c1-5231-b0c4-f58dcddc64cf',
      href: '#app/borrow/categories/78920f6d-57c1-5231-b0c4-f58dcddc64cf',
      imgSrc: require('../../../static/example-images/categories/5d302b26-5737-48e7-a90d-e65f22d8c065.jpg'),
      caption: 'Audio'
    },
  ]
}

export const modelListProps = {
  list: [
    {
      id: '78920f6d-57c1-5231-b0c4-f58dcddc64cf',
      href: '#app/borrow/categories/78920f6d-57c1-5231-b0c4-f58dcddc64cf',
      imgSrc: require('../../../static/example-images/categories/5d302b26-5737-48e7-a90d-e65f22d8c065.jpg'),
      caption: 'Audio'
    },
  ]
}

export default function Page02() {
  return <PageLayout title="Audio">
    <FilterSummary />
    <Section title="Unterkategorien" collapsible="true">
      <ListAsGridSquare {...subCategoryListProps} />
    </Section>
    <Section title="Gegenstände" collapsible="true">
      <ListAsGridSquare {...modelListProps} />
    </Section>
  </PageLayout>
}