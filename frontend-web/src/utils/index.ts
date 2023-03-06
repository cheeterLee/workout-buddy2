import { Dates } from "../types"

export const formateDate = (date: Date): string => {
	const padTo2Digits = (num: number): string => {
		return num.toString().padStart(2, "0")
	}
	return [
		date.getFullYear(),
		padTo2Digits(date.getMonth() + 1),
		padTo2Digits(date.getDate()),
	].join(".")
}

export const getStartAndEndOfWeek = (date: Date): Dates => {
	const _date = new Date(date)
	const day = _date.getDay()
	const diff = date.getDate() - day + (day === 0 ? -6 : 1)
	const monday = new Date(date.setDate(diff))
	const temp = new Date(monday)
	temp.setDate(temp.getDate() + 6)
	const sunday = new Date(temp)
	return { monday, sunday }
}
