::::docs-panel{id=left target=#api-models-ExplorerSegment}

### ExplorerSegment

:::docs-table
:docs-table-row{
name="id"
requiredText="long"
description="이 세그먼트의 고유 식별자"
}
:docs-table-row{
name="name"
requiredText="string"
description="이 세그먼트의 이름"
}
:docs-table-row{
name="climb_category"
requiredText="integer"
description="상승의 범주 [0, 5]입니다. Higher는 harder ie. 5는 Hors catégorie, 0은 climb_category에서 분류되지 않는다. climb_category = 5인 경우, climb_category_desc = HC. climb_category = 2인 경우, climb_category_desc = 3."
}
:docs-table-row{
name="climb_category_desc"
requiredText="string"
description="상승 범주에 대한 설명은 다음 값 중 하나를 취할 수 있습니다.: <code>NC</code>, <code>4</code>, <code>3</code>, <code>2</code>, <code>1</code>, <code>HC</code>"
}
:docs-table-row{
name="avg_grade"
requiredText="float"
description="세그먼트의 평균 등급(퍼센트)"
}
:docs-table-row{
name="start_latlng"
requiredText="LatLng"
description="<a href='/docs/reference/#api-models-LatLng'>LatLng</a>의 인스턴스입니다."
}
:docs-table-row{
name="end_latlng"
requiredText="LatLng"
description="a href='/docs/reference/#api-models-LatLng'>LatLng</a>의 인스턴스입니다."
}
:docs-table-row{
name="elev_difference"
requiredText="float"
description="세그먼트의 고도 차이(미터)"
}
:docs-table-row{
name="distance"
requiredText="float"
description="세그먼트의 거리(미터)"
}
:docs-table-row{
name="points"
requiredText="string"
description="세그먼트의 폴리선"
}
:::
::::

::::docs-panel{id=right}
::::
