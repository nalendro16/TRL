import { useEffect, useState } from 'react'
import { projectFirestore } from '../firebase/config'

export const useDocuments = (collection, id) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  //   realtime data for document
  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id)

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        if (snapshot.data()) {
          setDocuments({ ...snapshot.data(), id: snapshot.id })
          setError(null)
        } else {
          setError('NO such document Exists')
        }
      },
      (err) => {
        console.log(err.message)
        setError('failed to get documents')
      }
    )
    return () => {
      unsubscribe()
    }
  }, [collection, id])
  return { documents, error }
}
