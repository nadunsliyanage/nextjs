import React, { Suspense } from 'react'
import WidgetLoading from './loading'
import Widget from '@/components/widget/widget'
import ErrorPanel from '@/components/widget/error'
import { ErrorBoundary } from '@/components/lib/error-boundary/error-boundary'

const WidgetPlaceHolder = () => {
  return (
    <ErrorBoundary fallback={<ErrorPanel error={new Error("Widget failed")} />}>
      <Suspense fallback={<WidgetLoading />}>
        <Widget />
      </Suspense>
    </ErrorBoundary>
  )
}

export default WidgetPlaceHolder