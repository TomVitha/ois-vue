/**
 * NOTE: Tento store je pro pouze demonstrativní data, která se v produkci budou brát z databáze
 */

import { ref } from 'vue'
import { defineStore } from 'pinia'

export type User = {
  id: number
  username: string
}

const users = ref<User[]>([
  { id: 1, username: 'John Doe' },
  { id: 2, username: 'Jirka Jiříkovský' },
  { id: 3, username: 'Petr Stolice' },
  { id: 4, username: 'Ema Bílá' },
  { id: 5, username: 'David Lynch' },
  { id: 6, username: 'Jason Barlow' },
  { id: 7, username: 'Martin Smrkal' },
])

// Stores the ID of the currently active user.
const currentUser = ref<number>(1)

export type DocumentStatus = 0 | 1 | 2 | 3

export type DocumentStatusMeta = {
  text: string
  colorClass: string
}

const documentStatusMap: Record<DocumentStatus, DocumentStatusMeta> = {
  0: { text: 'Neznámé', colorClass: 'secondary' },
  1: { text: 'Nové', colorClass: 'info' },
  2: { text: 'Přijato', colorClass: 'success' },
  3: { text: 'Odmítnuto', colorClass: 'danger' },
}

function isDocumentStatus(status: unknown): status is DocumentStatus {
  return status === 0 || status === 1 || status === 2 || status === 3
}

function getDocumentStatusMeta(status: unknown): DocumentStatusMeta {
  if (!isDocumentStatus(status)) return documentStatusMap[0]
  return documentStatusMap[status]
}

export type Comment = {
  id: number
  refOrderId: number
  refDocumentId?: number
  userId: number
  datetime: string
  text: string
}

type OrderDocument = {
  id: number
  filepath: string
  datetime: string
  status: DocumentStatus
  uploaderId: number
}

type OrderPart = [
  mainDocument: OrderDocument,
  supportingDocuments: OrderDocument[][]
]

type Order = {
  id: number
  contractNumber: string
  supplier: string
  documents: OrderPart[]
}

const orders = ref<Order[]>([
  {
    id: 0,
    contractNumber: '194-11-049',
    supplier: 'Sapeli Development',
    documents: [
      // ORDER PART 1
      [
        // main document
        {
          id: 1,
          filepath: '/soubory/hlavni-dokument-1.pdf',
          datetime: '2026-05-11T09:38:00',
          status: 1,
          uploaderId: 7,
        },
        // supporting documents
        [
          // group of documents #1
          [
            {
              id: 2,
              filepath: '/soubory/6A017122_53341_01.scn',
              datetime: '2026-05-11T09:38:00',
              status: 1,
              uploaderId: 1,
            },
            {
              id: 3,
              filepath: '/soubory/189-08-287_KK_var 1_01.pdf',
              datetime: '2026-05-11T09:38:00',
              status: 1,
              uploaderId: 1,
            },
          ],
          // group of documents #2
          [
            {
              id: 4,
              filepath: '/soubory/1_1.png',
              datetime: '2026-05-11T09:38:00',
              status: 1,
              uploaderId: 1,
            },
            {
              id: 5,
              filepath: '/soubory/1_2.png',
              datetime: '2026-05-11T09:38:00',
              status: 1,
              uploaderId: 1,
            }
          ]
        ]
      ],
      // ORDER PART 2
      [
        // main document
        {
          id: 6,
          filepath: '/soubory/hlavni-dokument-2.pdf',
          datetime: '2026-05-11T09:38:00',
          status: 1,
          uploaderId: 7,
        },
        // supporting documents
        [
          // group of documents #1
          [
            {
              id: 7,
              filepath: '/soubory/6A017122_53341_01.scn',
              datetime: '2026-05-11T09:38:00',
              status: 1,
              uploaderId: 1,
            },
            {
              id: 8,
              filepath: '/soubory/189-08-287_KK_var 1_01.pdf',
              datetime: '2026-05-11T09:38:00',
              status: 1,
              uploaderId: 1,
            },
            {
              id: 9,
              filepath: '/soubory/1_1.png',
              datetime: '2026-05-11T09:38:00',
              status: 1,
              uploaderId: 1,
            },
          ],
          // group of documents #2
          [
            {
              id: 10,
              filepath: '/soubory/Eraserhead.1977.1080p.x265.AAC-PiratskaStrana.mkv',
              datetime: '2007-10-27T21:14:11',
              status: 1,
              uploaderId: 1,
            }
          ]
        ]
      ]
    ]
  },
  {
    id: 1,
    contractNumber: '189-08-106',
    supplier: 'Alarmové systémy CZ s.r.o.',
    documents: [
      // ORDER PART 1
      [
        // main document
        {
          id: 11,
          filepath: '189-08-106_Alarmové systémy_373-2026-ÚVD.pdf',
          datetime: '2026-05-14T08:44',
          status: 2,
          uploaderId: 2,
        },
        // supporting documents
        []
      ],
    ]
  },
  {
    id: 2,
    contractNumber: '192-11-298',
    supplier: 'Alarmové systémy CZ s.r.o.',
    documents: [
      // ORDER PART 1
      [
        // main document
        {
          id: 12,
          filepath: '192-11-298_ASCZ-2026-620.pdf',
          datetime: '2026-04-21T12:16',
          status: 2,
          uploaderId: 2,
        },
        // supporting documents
        []
      ],
    ]
  },
  {
    id: 3,
    contractNumber: '192-13-083',
    supplier: 'Alarmové systémy CZ s.r.o.',
    documents: [
      // ORDER PART 1
      [
        // main document
        {
          id: 13,
          filepath: '192-13-083_ASCZ-2026-605.pdf',
          datetime: '2026-04-17T14:39',
          status: 2,
          uploaderId: 3,
        },
        // supporting documents
        []
      ],
      // ORDER PART 2
      [
        // main document
        {
          id: 14,
          filepath: '192-13-083_ASCZ-2026-687.pdf',
          datetime: '2026-05-11T14:32',
          status: 2,
          uploaderId: 3,
        },
        // supporting documents
        []
      ],
    ]
  },
  // WIP
  {
    id: 4,
    contractNumber: '204-01-061',
    supplier: 'Ptáček koupelny',
    documents: [
      // ORDER PART 1
      [
        // main document
        {
          id: 15,
          filepath: '204-01-061_Ptáček-KD1.pdf',
          datetime: '2026-04-15T13:50',
          status: 2,
          uploaderId: 4,
        },
        // supporting documents
        [
          // group of documents #1
          [
            {
              id: 16,
              filepath: '204-01-061 specifikace CG výběr (KD1).zip',
              datetime: '2026-05-11T09:38:00',
              status: 3,
              uploaderId: 4,
            },
          ],
          // group of documents #2
          [
            {
              id: 17,
              filepath: '204-01-061 specifikace CG výběr 2 (KD l).zip',
              datetime: '2026-04-20T17:01',
              status: 1,
              uploaderId: 4,
            },
          ],
        ]
      ],
    ]
  },


])

const comments = ref<Comment[]>([
  {
    id: 1,
    refOrderId: 0,
    userId: 2,
    datetime: '2026-05-11T10:12:00',
    text: 'prosím ať se to udělá pořádně'
  },
  {
    id: 2,
    refOrderId: 0,
    refDocumentId: 2,
    userId: 3,
    datetime: '2026-05-11T10:12:00',
    text: 'Mě se to nelíbí'
  },
  {
    id: 3,
    refOrderId: 0,
    refDocumentId: 2,
    userId: 4,
    datetime: '2026-05-11T10:14:12',
    text: 'mě jo'
  },
  {
    id: 6,
    refOrderId: 0,
    refDocumentId: 10,
    userId: 5,
    datetime: '2007-10-27T22:07:33',
    text: 'Co tohle tady dělá?'
  },
  {
    id: 10,
    refOrderId: 0,
    refDocumentId: 0,
    userId: 4,
    datetime: '2026-05-11T10:14:00',
    text: 'Už to bude hotové?'
  },
  {
    id: 11,
    refOrderId: 4,
    refDocumentId: 16,
    userId: 1,
    datetime: '2026-05-13T09:38:00',
    text: 'Prosím o opravu přílohy k bidetové spršce, aby korespondovala s výměrami ve výkresu. Děkuji.'
  },

])

function getDocumentComments(orderId: number, documentId: number): Comment[] {
  return comments.value.filter(comment => comment.refOrderId === orderId && comment.refDocumentId === documentId)
}

function getOrderComments(orderId: number): Comment[] {
  return comments.value.filter(comment => comment.refOrderId === orderId)
}

function getUser(userId: number): User | undefined {
  return users.value.find(user => user.id === userId)
}

function getOrderDocument(orderId: number, documentId: number): OrderDocument | undefined {
  const order = orders.value.find(o => o.id === orderId)
  if (!order) return undefined

  return order.documents.flat(3).find(
    (d): d is OrderDocument =>
      typeof d === 'object' &&
      d !== null &&
      'id' in d &&
      'status' in d &&
      (d as OrderDocument).id === documentId
  )
}

function getNextCommentId(): number {
  return comments.value.reduce((maxId, comment) => Math.max(maxId, comment.id), 0) + 1
}

function addComment(orderId: number, text: string, documentId?: number): Comment | null {
  const order = orders.value.find(o => o.id === orderId)
  if (!order) return null

  if (documentId !== undefined) {
    const documentExistsInOrder = order.documents.flat(3).some(
      (d): d is OrderDocument =>
        typeof d === 'object' &&
        d !== null &&
        'id' in d &&
        'status' in d &&
        (d as OrderDocument).id === documentId
    )
    if (!documentExistsInOrder) return null
  }

  const trimmedText = text.trim()
  if (!trimmedText) return null

  const comment: Comment = {
    id: getNextCommentId(),
    refOrderId: orderId,
    ...(documentId !== undefined ? { refDocumentId: documentId } : {}),
    userId: currentUser.value,
    datetime: new Date().toISOString(),
    text: trimmedText,
  }

  comments.value.push(comment)
  return comment
}

function setDocumentStatus(orderId: number, documentId: number, status: DocumentStatus) {
  const order = orders.value.find(o => o.id === orderId)
  if (!order) return
  const document = order.documents.flat(3).find(
    (d): d is OrderDocument =>
      typeof d === 'object' &&
      d !== null &&
      'id' in d &&
      'status' in d &&
      (d as OrderDocument).id === documentId
  )
  if (!document) return
  document.status = status
}

export const useDoisOrders = defineStore('doisOrders', () => {
  return {
    users,
    currentUser,
    orders,
    comments,
    documentStatusMap,
    getDocumentStatusMeta,
    getDocumentComments,
    getOrderComments,
    getOrderDocument,
    getUser,
    addComment,
    setDocumentStatus,
  }
})
