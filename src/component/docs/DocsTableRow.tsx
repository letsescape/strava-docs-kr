interface DocsTableRowType {
    name: string;
    requiredText?: string;
    description: string;
}

export default function DocsTableRow({name, requiredText, description}: DocsTableRowType) {
    return (
        <tr key={name}>
            <td width="200px">
                <span className="parameter-name">{name}</span>
                <br/>
                { requiredText &&  (
                    <span className="parameter-description">{requiredText}</span>
                )}
            </td>
            <td>{description}</td>
        </tr>
    );
}