'use client'
import { Error } from 'app/components/Error'

export default function ErrorUI({ error }: { error: Error }) {
  return <Error message={error.message} />
}
