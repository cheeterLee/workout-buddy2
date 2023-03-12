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
	const temp2 = new Date(monday)
	const temp3 = new Date(monday)
	const temp4 = new Date(monday)
	const temp5 = new Date(monday)
	const temp6 = new Date(monday)
	const temp7 = new Date(monday)
	temp2.setDate(temp2.getDate() + 1)
	temp3.setDate(temp3.getDate() + 2)
	temp4.setDate(temp4.getDate() + 3)
	temp5.setDate(temp5.getDate() + 4)
	temp6.setDate(temp6.getDate() + 5)
	temp7.setDate(temp7.getDate() + 6)
	const tuesday = new Date(temp2)
	const wednesday = new Date(temp3)
	const thursday = new Date(temp4)
	const friday = new Date(temp5)
	const saturday = new Date(temp6)
	const sunday = new Date(temp7)
	return { monday, tuesday, wednesday, thursday, friday, saturday, sunday }
}

export const trunCateText = (str: string): string => {
	return str.length >= 3 ? str.slice(0, 3) + '..' : str
}