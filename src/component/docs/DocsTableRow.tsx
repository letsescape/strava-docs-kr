type DocsTableRowType = {
  name: string;
  requiredText?: string;
  description: string;
}

export default function DocsTableRow({name, requiredText, description}: DocsTableRowType) {
  return (
    <tr key={name}>
      <td width="200px">
        <span className="parameter-name" dangerouslySetInnerHTML={{__html: name}}/>
        <br/>
        {requiredText && (
          <span className="parameter-description" dangerouslySetInnerHTML={{__html: requiredText}}/>
        )}
      </td>
      <td><div dangerouslySetInnerHTML={{__html: description}}/></td>
    </tr>
  );
}