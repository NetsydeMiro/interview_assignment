export function dateInputString(date: Date): string {
	return date?.toISOString().split('T')[0] || ''
}