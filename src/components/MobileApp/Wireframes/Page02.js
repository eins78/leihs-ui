import React from 'react'
import FilterSummary from './Components/FilterSummary'
import ListAsGridSquare from './Components/ListAsGridSquare'
import PageLayout from './Components/PageLayout'
import Section from './Components/Section'

export const categoryListProps = {
  list: [
    {
      id: '78920f6d-57c1-5231-b0c4-f58dcddc64cf',
      href: '#app/borrow/categories/78920f6d-57c1-5231-b0c4-f58dcddc64cf',
      imgSrc: require('../../../static/example-images/models/62f4cb3c-999d-53ec-9426-298ebacd208a.jpeg'),
      caption: 'Audio'
    },
    {
      id: '3f69bb3b-8934-589c-8d96-69f3ce31416e',
      href: '#app/borrow/categories/3f69bb3b-8934-589c-8d96-69f3ce31416e',
      imgSrc: require('../../../static/example-images/categories/286f85ba-e1a1-5c36-b03b-cf443f81d77d.jpeg'),
      caption: 'Foto'
    },
    {
      id: '56336471-2ce5-541c-be64-7fdb891f49f5',
      href: '#app/borrow/categories/56336471-2ce5-541c-be64-7fdb891f49f5',
      imgSrc: require('../../../static/example-images/categories/9029dfa3-2691-5b73-94e0-785c5b0019a7.jpeg'),
      caption: 'Video'
    },
    {
      id: '82165b56-aa9e-5d6a-b37c-f446cda4004e',
      href: '#app/borrow/categories/82165b56-aa9e-5d6a-b37c-f446cda4004e',
      imgSrc: require('../../../static/example-images/categories/d5a8e40e-7890-5dde-9fb6-8317bac31b72.jpeg'),
      caption: 'Musikinstrumente & Zubehör'
    },
  ]
}

export default function Page02() {
  return <PageLayout title="Katalog">
    <FilterSummary />
    <Section title="Kategorien">
      <ListAsGridSquare {...categoryListProps} />
    </Section>
  </PageLayout>
}