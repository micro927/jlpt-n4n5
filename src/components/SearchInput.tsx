interface SearchInputProps {
  value: string
  onChange: (value: string) => void
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <input
      className="search-input"
      type="search"
      placeholder="ค้นหา คันจิ / ฟูริกานะ / ความหมาย…"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      aria-label="ค้นหา"
    />
  )
}
