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

type DocumentStatus = 0 | 1 | 2 | 3

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
  }
])

const comments = ref<Comment[]>([
  {
    id: 1,
    refOrderId: 0,
    refDocumentId: 1,
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
    id: 4,
    refOrderId: 0,
    refDocumentId: 7,
    userId: 3,
    datetime: '2026-05-11T10:12:00',
    text: 'Tohle je poznámka k dokumentu 194-11-049_Sapeli-KD1.pdf.'
  },
  {
    id: 5,
    refOrderId: 0,
    refDocumentId: 7,
    userId: 4,
    datetime: '2026-05-11T10:14:12',
    text: 'A tady je další koment.'
  },
  {
    id: 6,
    refOrderId: 0,
    refDocumentId: 10,
    userId: 5,
    datetime: '2007-10-27T22:07:33',
    text: 'Believe it or not, Eraserhead is my most spiritual film'
  },
  {
    id: 7,
    refOrderId: 0,
    refDocumentId: 10,
    userId: 6,
    datetime: '2007-10-27T22:08:50',
    text: 'Elaborate on that'
  },
  {
    id: 8,
    refOrderId: 0,
    refDocumentId: 10,
    userId: 5,
    datetime: '2007-10-27T22:09:00',
    text: 'no'
  },
  {
    id: 9,
    refOrderId: 0,
    userId: 7,
    datetime: '2026-05-11T10:14:00',
    text: 'Tady to je koment k celé objednávce.'
  },
  {
    id: 10,
    refOrderId: 0,
    refDocumentId: 0,
    userId: 4,
    datetime: '2026-05-11T10:14:00',
    text: 'Už to bude hotový?'
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

function getOrderDocumentFilename(orderId: number, documentId?: number): string | undefined {
  if (documentId === undefined) return undefined
  const document = getOrderDocument(orderId, documentId)
  if (!document) return undefined
  return document.filepath.split(/[/\\]/).at(-1) || document.filepath
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
    getDocumentComments,
    getOrderComments,
    getUser,
    getOrderDocumentFilename,
    addComment,
    setDocumentStatus,
  }
})
