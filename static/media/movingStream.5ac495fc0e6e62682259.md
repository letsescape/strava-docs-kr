::::docs-panel{id=left target=#api-models-MovingStream}

### MovingStream

:::docs-table
:docs-table-row{
name="original_size"
requiredText="integer"
description="이 스트림의 데이터 포인트 수"
}
:docs-table-row{
name="resolution"
requiredText="string"
description="이 스트림이 반환된 세부 수준(샘플링)은 다음 값 중 하나를 사용할 수 있습니다. <code>low</code>, <code>medium</code>, <code>high</code>."
}
:docs-table-row{
name="series_type"
requiredText="string"
description="스트림이 다운샘플링된 경우에 사용된 기본 시리즈는 다음 값 중 하나를 취할 수 있습니다. <code>distance</code>, <code>time</code>."
}
:docs-table-row{
name="data"
requiredText="LatLng"
description="이 스트림의 이동 값 시퀀스(부울 값)"
}
:::

::::

::::docs-panel{id=right}
::::
