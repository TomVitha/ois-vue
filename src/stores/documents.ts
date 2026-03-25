import { ref } from 'vue'
import { defineStore } from 'pinia'

const categories = ref([
  { id: 1, name: 'Ceník' },
  { id: 2, name: 'Obchodní složky' },
  { id: 3, name: 'Ostatní' },
  { id: 4, name: 'Smlouvy a dokumenty' },
])

const documents = ref([
  {
    id: 1,
    name: '192 Tesla Hloubětín A-Z Ceník klientských změn',
    dateAdded: '2025-11-10',
    dateValid: '2025-11-11',
    productId: '192-03-147',
    categoryId: 1,
    fileUrl: 'sample-invoice.pdf',
    fileSize: '6 kB',
  },
  {
    id: 2,
    name: '192-03-147_OS1.pdf',
    dateAdded: '2025-01-14',
    dateValid: '2025-01-15',
    productId: '192-03-147',
    categoryId: 2,
    fileUrl: 'sample-invoice.pdf',
    fileSize: '6 kB',
  },
  {
    id: 2,
    name: '192-03-147_OS2.pdf',
    dateAdded: '2025-03-27',
    dateValid: '2025-03-28',
    productId: '192-03-147',
    categoryId: 2,
    fileUrl: 'sample-invoice.pdf',
    fileSize: '6 kB',
  },
  {
    id: 4,
    name: 'Návod na údržbu bytu obecný.pdf',
    dateAdded: '2025-03-12',
    dateValid: '2025-03-12',
    productId: '192-03-147',
    categoryId: 3,
    fileUrl: 'sample-invoice.pdf',
    fileSize: '9 kB',
  },
  {
    id: 5,
    name: 'Smlouva o budoucí kupní smlouvě 192-03-147 B218090061.pdf',
    dateAdded: '2025-06-16',
    dateValid: '2025-06-16',
    productId: '192-03-147',
    categoryId: 4,
    fileUrl: 'sample-invoice.pdf',
    fileSize: '5 kB',
  },
  {
    id: 6,
    name: 'Dodatek klientský č.1 192-03-147 8218090061.pdf',
    dateAdded: '2025-06-16',
    dateValid: '2025-06-16',
    productId: '192-03-147',
    categoryId: 3,
    fileUrl: 'sample-invoice.pdf',
    fileSize: '3 kB',
  },
  {
    id: 7,
    name: 'Klientské administrativní poplatky pro RD.pdf',
    dateAdded: '2024-09-11',
    dateValid: '2024-09-12',
    productId: '194-RD-007',
    categoryId: 4,
    fileUrl: 'sample-invoice.pdf',
    fileSize: '9 kB',
  },
  {
    id: 8,
    name: 'Oznámení o demolici rodinného domu.pdf',
    dateAdded: '2025-07-31',
    dateValid: '2025-08-01',
    productId: '194-RD-007',
    categoryId: 3,
    fileUrl: 'sample-invoice.pdf',
    fileSize: '1 kB',
  },
])

export const useDocumentsStore = defineStore('documents', () => {
  return {
    categories,
    documents,
  }
})
