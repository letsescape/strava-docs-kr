
## Required in docs markdown
`Left area`
``` markdown
:::docs-panel{artributes}

    Add contents

:::
```

`Right area`
``` markdown
:::docs-panel{artributes}

    Add contents
    
:::
```

<br>

`docs-panel attributes`

| property | value | isRequired |   
| -------- | ----- | ---------- |   
| # or id  | left or right | true |
| target   | link or anchor | false |
> How to use   
> ```markdown
> :::docs-panel{#id target=link}
> ```

<br>

## Add attribute in markdown

`Example`
``` markdown
# Strava API v3
<!-- rehype:id=asd -->

[github](https://github.com)<<!--rehype:rel=external&style=color:pink;&data-name=kenny-->
```

> Output:
> ``` html
> <h1 id="asd">Strava API v3</h1>
>  
> <a href="https://github.com" rel="external" style="color:pink;" data-name="kenny">github</a>
> ```

> Reference
> https://github.com/jaywcjlove/rehype-attr/blob/main/README.md

