::::docs-panel{id=left target=#api-models-Route}

### Route

:::docs-table
:docs-table-row{
name="athlete"
requiredText="SummaryAthlete"
description="<a href='/docs/reference/#api-models-SummaryAthlete'>SummaryAthlete</a>의 인스턴스입니다."
}
:docs-table-row{
name="description"
requiredText="string"
description="경로의 설명"
}
:docs-table-row{
name="distance"
requiredText="float"
description="경로 거리(미터)"
}
:docs-table-row{
name="elevation_gain"
requiredText="float"
description="경로의 표고 게인입니다."
}
:docs-table-row{
name="id"
requiredText="long"
description="경로의 식별자"
}
:docs-table-row{
name="id_str"
requiredText="string"
description="문자열 형식의 경로의 식별자"
}
:docs-table-row{
name="map"
requiredText="PolylineMap"
description="<a href='/docs/reference/#api-models-PolylineMap'>PolylineMap</a>의 인스턴스입니다."
}
:docs-table-row{
name="name"
requiredText="string"
description="이 경로의 이름"
}
:docs-table-row{
name="private"
requiredText="boolean"
description="이 경로가 비공개인지 여부"
}
:docs-table-row{
name="starred"
requiredText="boolean"
description="로그인한 선수가 이 경로를 별표한지 여부"
}
:docs-table-row{
name="timestamp"
requiredText="integer"
description="경로가 생성된 시점의 에폭 타임스탬프"
}
:docs-table-row{
name="type"
requiredText="integer"
description="경로의 유형 (주행 1, 달리기 2)"
}
:docs-table-row{
name="sub_type"
requiredText="integer"
description="경로의 하위 유형 (도로용 1, 산악자전거용 2, 크로스용 3, 트레일용 4, 혼합용 5)"
}
:docs-table-row{
name="created_at"
requiredText="DateTime"
description="경로가 생성된 시간"
}     
:docs-table-row{
name="updated_at"
requiredText="DateTime"
description="경로가 마지막으로 업데이트된 시간"
}
:docs-table-row{
name="estimated_moving_time"
requiredText="integer"
description="인증된 선수가 경로를 완료하는 데 걸리는 예상 시간(초)"
}
:docs-table-row{
name="segments"
requiredText="SummarySegment"
description="이 경로로 통과된 세그먼트"
}
:::

::::

::::docs-panel{id=right}
::::
