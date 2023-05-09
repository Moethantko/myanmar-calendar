import {Fragment, useEffect, useState} from 'react'
import {
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ClockIcon,
    EllipsisHorizontalIcon,
} from '@heroicons/react/20/solid'
import {Menu, Transition} from '@headlessui/react'
import {
    add, addDays,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    getDay,
    isSameMonth,
    isToday,
    parse,
    startOfToday, startOfWeek
} from 'date-fns'
import {englishToMyanmarDate} from "burma-calendar";
import {engToMyanmarNumber} from "../utils/engToMyanmarNumber";


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
]

export default function MyanmarCalendar() {
    let today = startOfToday()
    let [selectedDay, setSelectedDay] = useState(today)
    let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())


    let days = eachDayOfInterval({
        start: startOfWeek(firstDayCurrentMonth),
        end: add(endOfMonth(firstDayCurrentMonth), {
            days: 10,
        }),
    })

    if (days.length > 35) {
        days = days.slice(0, 35)
    }

    function previousMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, {months: -1})
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, {months: 1})
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }


    return (
        <div className="lg:flex lg:h-full lg:flex-col">
            <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
                <h1 className="text-base font-semibold leading-6 text-gray-900">
                    <time dateTime="2022-01">{format(firstDayCurrentMonth, 'MMMM yyyy')}</time>
                    <div className="font-normal text-sm">
                        {englishToMyanmarDate(firstDayCurrentMonth).year}
                        {" "}
                        ခုနှစ်
                        {" "}
                        {englishToMyanmarDate(firstDayCurrentMonth).month}
                        {" - "}
                        {englishToMyanmarDate(add(firstDayCurrentMonth, {months: 1})).month}
                    </div>
                </h1>
                <div className="flex items-center">
                    <div className="relative flex items-center rounded-md bg-white shadow-sm md:items-stretch">
                        <div
                            className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-gray-300"
                            aria-hidden="true"
                        />
                        <button
                            type="button"
                            className="flex items-center justify-center rounded-l-md py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50 md:hover:ring-1"
                            onClick={previousMonth}
                        >
                            <span className="sr-only">Previous month</span>
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true"/>
                        </button>
                        <button
                            type="button"
                            className="hidden px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block md:hover:bg-gray-50 md:hover:ring-1"
                            onClick={() => setCurrentMonth(format(today, 'MMM-yyyy'))}
                        >
                            Today
                        </button>
                        <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden"/>
                        <button
                            type="button"
                            className="flex items-center justify-center rounded-r-md py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2  md:hover:bg-gray-50 md:hover:ring-1"
                            onClick={nextMonth}
                        >
                            <span className="sr-only">Next month</span>
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true"/>
                        </button>
                    </div>
                    {/*<div className="hidden md:ml-4 md:flex md:items-center">*/}
                    {/*    <Menu as="div" className="relative">*/}
                    {/*        <Menu.Button*/}
                    {/*            type="button"*/}
                    {/*            className="flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"*/}
                    {/*        >*/}
                    {/*            Month view*/}
                    {/*            <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true"/>*/}
                    {/*        </Menu.Button>*/}

                    {/*        <Transition*/}
                    {/*            as={Fragment}*/}
                    {/*            enter="transition ease-out duration-100"*/}
                    {/*            enterFrom="transform opacity-0 scale-95"*/}
                    {/*            enterTo="transform opacity-100 scale-100"*/}
                    {/*            leave="transition ease-in duration-75"*/}
                    {/*            leaveFrom="transform opacity-100 scale-100"*/}
                    {/*            leaveTo="transform opacity-0 scale-95"*/}
                    {/*        >*/}
                    {/*            <Menu.Items*/}
                    {/*                className="absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">*/}
                    {/*                <div className="py-1">*/}
                    {/*                    <Menu.Item>*/}
                    {/*                        {({active}) => (*/}
                    {/*                            <a*/}
                    {/*                                href="#"*/}
                    {/*                                className={classNames(*/}
                    {/*                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                    {/*                                    'block px-4 py-2 text-sm'*/}
                    {/*                                )}*/}
                    {/*                            >*/}
                    {/*                                Day view*/}
                    {/*                            </a>*/}
                    {/*                        )}*/}
                    {/*                    </Menu.Item>*/}
                    {/*                    <Menu.Item>*/}
                    {/*                        {({active}) => (*/}
                    {/*                            <a*/}
                    {/*                                href="#"*/}
                    {/*                                className={classNames(*/}
                    {/*                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                    {/*                                    'block px-4 py-2 text-sm'*/}
                    {/*                                )}*/}
                    {/*                            >*/}
                    {/*                                Week view*/}
                    {/*                            </a>*/}
                    {/*                        )}*/}
                    {/*                    </Menu.Item>*/}
                    {/*                    <Menu.Item>*/}
                    {/*                        {({active}) => (*/}
                    {/*                            <a*/}
                    {/*                                href="#"*/}
                    {/*                                className={classNames(*/}
                    {/*                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                    {/*                                    'block px-4 py-2 text-sm'*/}
                    {/*                                )}*/}
                    {/*                            >*/}
                    {/*                                Month view*/}
                    {/*                            </a>*/}
                    {/*                        )}*/}
                    {/*                    </Menu.Item>*/}
                    {/*                    <Menu.Item>*/}
                    {/*                        {({active}) => (*/}
                    {/*                            <a*/}
                    {/*                                href="#"*/}
                    {/*                                className={classNames(*/}
                    {/*                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                    {/*                                    'block px-4 py-2 text-sm'*/}
                    {/*                                )}*/}
                    {/*                            >*/}
                    {/*                                Year view*/}
                    {/*                            </a>*/}
                    {/*                        )}*/}
                    {/*                    </Menu.Item>*/}
                    {/*                </div>*/}
                    {/*            </Menu.Items>*/}
                    {/*        </Transition>*/}
                    {/*    </Menu>*/}
                    {/*    <div className="ml-6 h-6 w-px bg-gray-300"/>*/}
                    {/*    <button*/}
                    {/*        type="button"*/}
                    {/*        className="ml-6 rounded-md  bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"*/}
                    {/*    >*/}
                    {/*        Add event*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                    {/*<Menu as="div" className="relative ml-6 md:hidden">*/}
                    {/*    <Menu.Button*/}
                    {/*        className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">*/}
                    {/*        <span className="sr-only">Open menu</span>*/}
                    {/*        <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true"/>*/}
                    {/*    </Menu.Button>*/}

                    {/*    <Transition*/}
                    {/*        as={Fragment}*/}
                    {/*        enter="transition ease-out duration-100"*/}
                    {/*        enterFrom="transform opacity-0 scale-95"*/}
                    {/*        enterTo="transform opacity-100 scale-100"*/}
                    {/*        leave="transition ease-in duration-75"*/}
                    {/*        leaveFrom="transform opacity-100 scale-100"*/}
                    {/*        leaveTo="transform opacity-0 scale-95"*/}
                    {/*    >*/}
                    {/*        <Menu.Items*/}
                    {/*            className="absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">*/}
                    {/*            <div className="py-1">*/}
                    {/*                <Menu.Item>*/}
                    {/*                    {({active}) => (*/}
                    {/*                        <a*/}
                    {/*                            href="#"*/}
                    {/*                            className={classNames(*/}
                    {/*                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                    {/*                                'block px-4 py-2 text-sm'*/}
                    {/*                            )}*/}
                    {/*                        >*/}
                    {/*                            Create event*/}
                    {/*                        </a>*/}
                    {/*                    )}*/}
                    {/*                </Menu.Item>*/}
                    {/*            </div>*/}
                    {/*            <div className="py-1">*/}
                    {/*                <Menu.Item>*/}
                    {/*                    {({active}) => (*/}
                    {/*                        <a*/}
                    {/*                            href="#"*/}
                    {/*                            className={classNames(*/}
                    {/*                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                    {/*                                'block px-4 py-2 text-sm'*/}
                    {/*                            )}*/}
                    {/*                        >*/}
                    {/*                            Go to today*/}
                    {/*                        </a>*/}
                    {/*                    )}*/}
                    {/*                </Menu.Item>*/}
                    {/*            </div>*/}
                    {/*            <div className="py-1">*/}
                    {/*                <Menu.Item>*/}
                    {/*                    {({active}) => (*/}
                    {/*                        <a*/}
                    {/*                            href="#"*/}
                    {/*                            className={classNames(*/}
                    {/*                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                    {/*                                'block px-4 py-2 text-sm'*/}
                    {/*                            )}*/}
                    {/*                        >*/}
                    {/*                            Day view*/}
                    {/*                        </a>*/}
                    {/*                    )}*/}
                    {/*                </Menu.Item>*/}
                    {/*                <Menu.Item>*/}
                    {/*                    {({active}) => (*/}
                    {/*                        <a*/}
                    {/*                            href="#"*/}
                    {/*                            className={classNames(*/}
                    {/*                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                    {/*                                'block px-4 py-2 text-sm'*/}
                    {/*                            )}*/}
                    {/*                        >*/}
                    {/*                            Week view*/}
                    {/*                        </a>*/}
                    {/*                    )}*/}
                    {/*                </Menu.Item>*/}
                    {/*                <Menu.Item>*/}
                    {/*                    {({active}) => (*/}
                    {/*                        <a*/}
                    {/*                            href="#"*/}
                    {/*                            className={classNames(*/}
                    {/*                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                    {/*                                'block px-4 py-2 text-sm'*/}
                    {/*                            )}*/}
                    {/*                        >*/}
                    {/*                            Month view*/}
                    {/*                        </a>*/}
                    {/*                    )}*/}
                    {/*                </Menu.Item>*/}
                    {/*                <Menu.Item>*/}
                    {/*                    {({active}) => (*/}
                    {/*                        <a*/}
                    {/*                            href="#"*/}
                    {/*                            className={classNames(*/}
                    {/*                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
                    {/*                                'block px-4 py-2 text-sm'*/}
                    {/*                            )}*/}
                    {/*                        >*/}
                    {/*                            Year view*/}
                    {/*                        </a>*/}
                    {/*                    )}*/}
                    {/*                </Menu.Item>*/}
                    {/*            </div>*/}
                    {/*        </Menu.Items>*/}
                    {/*    </Transition>*/}
                    {/*</Menu>*/}
                </div>
            </header>

            <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">

                <div
                    className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
                    <div className="bg-white py-2 text-red-500">
                        S<span className="sr-only sm:not-sr-only">un</span>
                    </div>
                    <div className="bg-white py-2">
                        M<span className="sr-only sm:not-sr-only">on</span>
                    </div>
                    <div className="bg-white py-2">
                        T<span className="sr-only sm:not-sr-only">ue</span>
                    </div>
                    <div className="bg-white py-2">
                        W<span className="sr-only sm:not-sr-only">ed</span>
                    </div>
                    <div className="bg-white py-2">
                        T<span className="sr-only sm:not-sr-only">hu</span>
                    </div>
                    <div className="bg-white py-2">
                        F<span className="sr-only sm:not-sr-only">ri</span>
                    </div>
                    <div className="bg-white py-2 text-red-500">
                        S<span className="sr-only sm:not-sr-only">at</span>
                    </div>
                </div>
                <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">

                    <div
                        className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-5 lg:gap-px lg:text-lg lg:font-light">
                        {days.map((day, dayIdx) => (
                            //  TODO: enhance padding y by content
                            <div
                                key={day.toString()}
                                className={classNames(
                                    isSameMonth(day, firstDayCurrentMonth) ? 'bg-white' : 'bg-gray-50 text-gray-500',
                                    'relative px-3  py-[4.9rem]',
                                    // dayIdx === 0 ? colStartClasses[getDay(day)] : '',
                                )}
                            >
                                <div className="absolute top-3 left-3 text-sm">
                                    {engToMyanmarNumber(englishToMyanmarDate(day).date)}
                                </div>

                                <div className="absolute top-3 right-3 text-xs font-light">
                                    {englishToMyanmarDate(day).moonPhase}
                                </div>

                                <div className="absolute bottom-3 right-3 text-sm">
                                    <time
                                        className={
                                            isToday(day) && isSameMonth(day, firstDayCurrentMonth)
                                                ? 'flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white'
                                                : undefined
                                        }
                                        dateTime={format(day, 'yyyy-MM-dd')}
                                    >
                                        {format(day, 'd')}
                                    </time>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/*  <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">*/}
                    {/*      {days.map((day) => (*/}
                    {/*          <button*/}
                    {/*              key={day.date}*/}
                    {/*              type="button"*/}
                    {/*              className={classNames(*/}
                    {/*                  day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',*/}
                    {/*                  (day.isSelected || day.isToday) && 'font-semibold',*/}
                    {/*                  day.isSelected && 'text-white',*/}
                    {/*                  !day.isSelected && day.isToday && 'text-indigo-600',*/}
                    {/*                  !day.isSelected && day.isCurrentMonth && !day.isToday && 'text-gray-900',*/}
                    {/*                  !day.isSelected && !day.isCurrentMonth && !day.isToday && 'text-gray-500',*/}
                    {/*                  'flex h-14 flex-col px-3 py-2 hover:bg-gray-100 focus:z-10'*/}
                    {/*              )}*/}
                    {/*          >*/}
                    {/*              <time*/}
                    {/*                  dateTime={day.date}*/}
                    {/*                  className={classNames(*/}
                    {/*                      day.isSelected && 'flex h-6 w-6 items-center justify-center rounded-full',*/}
                    {/*                      day.isSelected && day.isToday && 'bg-indigo-600',*/}
                    {/*                      day.isSelected && !day.isToday && 'bg-gray-900',*/}
                    {/*                      'ml-auto'*/}
                    {/*                  )}*/}
                    {/*              >*/}
                    {/*                  {day.date.split('-').pop().replace(/^0/, '')}*/}
                    {/*              </time>*/}
                    {/*              <span className="sr-only">{day.events.length} events</span>*/}
                    {/*              {day.events.length > 0 && (*/}
                    {/*                  <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">*/}
                    {/*  {day.events.map((event) => (*/}
                    {/*      <span key={event.id} className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"/>*/}
                    {/*  ))}*/}
                    {/*</span>*/}
                    {/*              )}*/}
                    {/*          </button>*/}
                    {/*      ))}*/}
                    {/*  </div>*/}
                </div>
            </div>

        </div>
    )
}