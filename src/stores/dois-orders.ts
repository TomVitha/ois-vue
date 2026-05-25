/**
 * NOTE: Tento store je pro pouze demonstrativní data, která se v produkci budou brát z databáze
 */

import { ref } from 'vue'
import { defineStore } from 'pinia'

type DocumentStatus = 0 | 1 | 2 | 3

const orders = ref([
  {
    id: 0,
    contractNumber: '194-11-049',
    supplier: 'Sapeli Development',
    documents: [
      // main (order) document
      {
        id: 1,
        filename: 'hlavni-dokument.pdf',
        datetime: '2026-05-11T09:38:00',
        status: 1,
      },
      // supplier documents
      [
        // group of documents #1
        [
          {
            id: 2,
            filename: '6A017122_53341_01.scn',
            datetime: '2026-05-11T09:38:00',
            status: 1,
            comments: [
              {
                username: 'Petr Stolice',
                datetime: '2026-05-11T10:12:00',
                text: 'Tohle je poznámka k dokumentu 194-11-049_Sapeli-KD1.pdf.'
              },
              {
                username: 'Ema Bílá',
                datetime: '2026-05-11T10:14:12',
                text: 'A tady je další koment.'
              }
            ]
          },
          {
            id: 3,
            filename: '189-08-287_KK_var 1_01.pdf',
            datetime: '2026-05-11T09:38:00',
            status: 1,
          },
          {
            id: 4,
            filename: '1_1.png',
            datetime: '2026-05-11T09:38:00',
            status: 1,
          },
        ],
        // group of documents #2
        [
          {
            id: 5,
            filename: '1_2.png',
            datetime: '2026-05-11T09:38:00',
            status: 1,
          }
        ]
      ]
    ],
    // comments for the whole order itself
    comments: [
      {
        username: 'Martin Smrkal',
        datetime: '2026-05-11T10:14:00',
        text: 'A toto je koment k celé objednávce.'
      }
    ],
  }
])

function setDocumentStatus(orderId: number, documentId: number, status: DocumentStatus) {
  const order = orders.value.find(o => o.id === orderId)
  if (!order) return
  const document = order.documents.flat(2).find((d: any) => d.id === documentId)
  if (!document) return
  document.status = status
}


export const useDoisOrders = defineStore('doisOrders', () => {
  return {
    orders,
    setDocumentStatus,
  }
})