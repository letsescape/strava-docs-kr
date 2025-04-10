::::docs-panel{id=left target=#api-models-DetailedSegmentEffort}

### DetailedSegmentEffort

:::docs-table
:docs-table-row{
name="id"
requiredText="long"
description="이 노력의 고유한 식별자"
}
:docs-table-row{
name="activity_id"
requiredText="long"
description="이 작업과 관련된 활동의 고유 식별자"
}
:docs-table-row{
name="elapsed_time"
requiredText="integer"
description="작업 경과 시간"
}
:docs-table-row{
name="start_date"
requiredText="DateTime"
description="작업이 시작된 시간입니다."
}
:docs-table-row{
name="start_date_local"
requiredText="DateTime"
description="로컬 표준 시간대에서 작업이 시작된 시간입니다."
}
:docs-table-row{
name="distance"
requiredText="float"
description="작업 거리(미터)"
}
:docs-table-row{
name="is_kom"
requiredText="boolean"
description="이 노력이 리더보드에서 현재 최고인지 여부"
}
:docs-table-row{
name="name"
requiredText="string"
description="이 작업이 수행된 세그먼트의 이름"
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
name="moving_time"
requiredText="integer"
description="노력이 움직이는 시간"
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
name="average_cadence"
requiredText="float"
description="노력의 평균 카덴스"
}
:docs-table-row{
name="average_watts"
requiredText="float"
description="노력의 평균 와트 수"
}
:docs-table-row{
name="device_watts"
requiredText="boolean"
description="주행 시 전용 기록 장치에 의해 와트 수가 보고되었는지 여부"
}
:docs-table-row{
name="average_heartrate"
requiredText="float"
description="이 노력 동안 운동선수의 심박수"
}
:docs-table-row{
name="max_heartrate"
requiredText="float"
description="이 노력 동안 선수의 최대 심박수"
}
:docs-table-row{
name="segment"
requiredText="SummarySegment"
description="<a href='/docs/reference/#api-models-SummarySegment'>SummarySegment</a>의 인스턴스입니다."
}
:docs-table-row{
name="kom_rank"
requiredText="integer"
description="업로드 시 글로벌 리더보드가 상위 10위 안에 속할 경우 글로벌 리더보드의 노력 순위"
}
:docs-table-row{
name="pr_rank"
requiredText="integer"
description="업로드 시 선수 리더보드가 상위 3위 안에 속할 경우 선수 리더보드에 대한 노력 순위"
}
:docs-table-row{
name="hidden"
requiredText="boolean"
description="활동 내에서 볼 때 이 노력을 숨겨야 하는지 여부"
}
:::

::::

::::docs-panel{id=right}
::::

