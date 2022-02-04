interface DocsTableType {
    children: string;
}

export default function DocsTable({children}: DocsTableType) {
    return (
        <table className="parameters">
            <tbody>{children}</tbody>
        </table>
    )
}