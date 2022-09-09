::::docs-panel{id=left target=#api-models-Lap}

### Lap

선수에 대한 롤업된 통계 및 총계 집합

:::docs-table
:docs-table-row{
name="id"
requiredText="long"
description="이 랩의 고유 식별자"
}
:docs-table-row{
name="activity"
requiredText="MetaActivity"
description="<a href='/docs/reference/#api-models-MetaActivity'>MetaActivity</a>의 인스턴스입니다."
}
:docs-table-row{
name="athlete"
requiredText="MetaAthlete"
description="<a href='/docs/reference/#api-models-MetaAthlete'>MetaAthlete</a>의 인스턴스입니다."
}
:docs-table-row{
name="average_cadence"
requiredText="float"
description="랩의 평균 카덴스"
}
:docs-table-row{
name="average_speed"
requiredText="float"
description="랩의 평균 속도"
}
:docs-table-row{
name="distance"
requiredText="float"
description="랩의 거리(미터)"
}
:docs-table-row{
name="elapsed_time"
requiredText="integer"
description="랩의 경과 시간(초)"
}
:docs-table-row{
name="start_index"
requiredText="integer"
description="활동 스트림에서 이 작업의 시작 인덱스"
}
:docs-table-row{
name="end_index"
requiredText="integer"
description="활동 스트림에서 이 작업의 종료 인덱스"
}
:docs-table-row{
name="lap_index"
requiredText="integer"
description="해당 랩이 속한 활동에서 해당 랩의 인덱스"
}
:docs-table-row{
name="max_speed"
requiredText="float"
description="이 라트의 최대 속도(초당 미터)"
}
:docs-table-row{
name="moving_time"
requiredText="integer"
description="랩의 이동 시간(초 단위)"
}
:docs-table-row{
name="name"
requiredText="string"
description="랩 이름"
}
:docs-table-row{
name="pace_zone"
requiredText="integer"
description="이 랩 동안 선수의 페이스 존"
}
:docs-table-row{
name="split"
requiredText="integer"
description="<a href='/docs/reference/#api-models-integer'>integer</a>의 인스턴스입니다."
}
:docs-table-row{
name="start_date"
requiredText="DateTime"
description="랩이 시작된 시간입니다."
}
:docs-table-row{
name="start_date_local"
requiredText="DateTime"
description="로컬 표준 시간대에서 랩이 시작된 시간입니다."
}
:docs-table-row{
name="start_dtotal_elevation_gainate_local"
requiredText="float"
description="해당 랩의 고도(미터)"
}
:::

::::

::::docs-panel{id=right}
::::
