::::docs-panel{id=left target=#api-models-SummarySegment}

### SummarySegment

:::docs-table
:docs-table-row{
name="id"
requiredText="long"
description="이 세그먼트의 고유 식별자"
}
:docs-table-row{
name="name"
requiredText="string"
description="세그먼트 이름"
}
:docs-table-row{
name="activity_type"
requiredText="string"
description="다음 값 중 하나를 사용할 수 있습니다.: <code>Ride</code>, <code>Run</code>"
}
:docs-table-row{
name="distance"
requiredText="float"
description="세그먼트의 거리(미터)"
}
:docs-table-row{
name="average_grade"
requiredText="float"
description="세그먼트의 평균 등급(퍼센티지)"
}
:docs-table-row{
name="maximum_grade"
requiredText="float"
description="세그먼트의 최대 등급(퍼센티지)"
}
:docs-table-row{
name="elevation_high"
requiredText="float"
description="세그먼트의 가장 높은 높이(미터)"
}
:docs-table-row{
name="elevation_low"
requiredText="float"
description="세그먼트의 가장 낮은 높이(미터)"
}
:docs-table-row{
name="start_latlng"
requiredText="LatLng"
description="<a href='/docs/reference/#api-models-LatLng'>LatLng</a>의 인스턴스입니다."
}
:docs-table-row{
name="end_latlng"
requiredText="LatLng"
description="<a href='/docs/reference/#api-models-LatLng'>LatLng</a>의 인스턴스입니다."
}
:docs-table-row{
name="climb_category"
requiredText="integer"
description="상승의 범주 [0, 5]입니다. Higher은 harder ie. 5는 Hors catégorie, 0은 climb_category에서 분류되지 않는다."
}
:docs-table-row{
name="city"
requiredText="string"
description="세그먼트의 도시입니다."
}
:docs-table-row{
name="state"
requiredText="string"
description="세그먼트의 상태 또는 지리적 영역입니다."
}
:docs-table-row{
name="country"
requiredText="string"
description="세그먼트의 국가입니다."
}
:docs-table-row{
name="private"
requiredText="boolean"
description="이 세그먼트가 비공개인지 여부입니다."
}
:docs-table-row{
name="athlete_pr_effort"
requiredText="SummarySegmentEffort"
description="<a href='/docs/reference/#api-models-SummarySegmentEffort'>SummarySegmentEffort</a>의 인스턴스입니다."
}
:docs-table-row{
name="athlete_segment_stats"
requiredText="SummaryPRSegmentEffort"
description="<a href='/docs/reference/#api-models-SummaryPRSegmentEffort'>SummaryPRSegmentEffort</a>의 인스턴스입니다."
}

:::

::::

::::docs-panel{id=right}
::::
