
type Props = {
    category: string
    onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined
}
export const QuoteCategorySelector = ({ category, onChange }: Props) => {
    return (
        <div className="select">
            <select name="format" id="format"
                value={category}
                onChange={onChange}>
                <option value="happiness">Happiness</option>
                <option value="marriage">marriage</option>
                <option value="medical">medical</option>
                <option value="leadership">leadership</option>
                <option value="fitness">fitness</option>
                <option value="friendship">friendship</option>
                <option value="attitude">attitude</option>
            </select>
        </div>
    )
}
