import React, { Suspense } from 'react'
import WidgetLoading from './loading'
import Widget from '@/components/widget/widget'

const WidgetPlaceHolder = () => {
  return (
    <Suspense fallback={<WidgetLoading />}>
        <Widget />
    </Suspense>
  )
}

export default WidgetPlaceHolder