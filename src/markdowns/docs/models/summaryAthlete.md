::::docs-panel{id=left target=#api-models-SummaryAthlete}

### SummaryAthlete

:::docs-table
:docs-table-row{
name="id"
requiredText="long"
description="선수의 고유 식별자"
}
:docs-table-row{
name="resource_state"
requiredText="integer"
description='리소스 상태, 세부 수준을 나타냅니다. 가능한 값: 1 -> "메타", 2 -> "요약", 3 -> "세부 사항"'
}
:docs-table-row{
name="firstname"
requiredText="string"
description="선수의 이름입니다."
}
:docs-table-row{
name="lastname"
requiredText="string"
description="선수의 성입니다."
}
:docs-table-row{
name="profile_medium"
requiredText="string"
description="62x62픽셀 프로필 사진의 URL입니다."
}
:docs-table-row{
name="profile"
requiredText="string"
description="124x124픽셀 프로필 사진의 URL입니다."
}
:docs-table-row{
name="city"
requiredText="string"
description="운동선수의 도시."
}
:docs-table-row{
name="state"
requiredText="string"
description="선수의 주 또는 지리적 지역."
}
:docs-table-row{
name="country"
requiredText="string"
description="선수의 나라."
}
:docs-table-row{
name="sex"
requiredText="string"
description="운동선수의 성별입니다. 다음 값 중 하나를 사용할 수 있습니다<br>
<code> M </code>,<code> F </code>"
}
:docs-table-row{
name="premium"
requiredText="boolean"
description="더 이상 사용되지 않습니다. 대신 서밋 필드를 사용하십시오. 선수에게 Summit 구독이 있는지 여부.
"
}
:docs-table-row{
name="summit"
requiredText="boolean"
description="선수에게 Summit 구독이 있는지 여부."
}
:docs-table-row{
name="created_at"
requiredText="DateTime"
description="선수가 생성된 시간입니다."
}
:docs-table-row{
name="updated_at"
requiredText="DateTime"
description="선수가 마지막으로 업데이트된 시간입니다."
}
:::

::::

::::docs-panel{id=right}
::::

