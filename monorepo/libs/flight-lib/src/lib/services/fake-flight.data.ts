/* eslint-disable max-len */
import { Flight } from '../models/flight';

export const fakeFlights: Flight[] = [
  {
    id: 1,
    from: 'Graz',
    to: 'Mallorca',
    date: '2020-10-15T06:22:52.4208588+00:00',
    delayed: false
  },
  { id: 2, from: 'Graz', to: 'Hamburg', date: '2020-10-12T06:22:52.4208588+00:00', delayed: false },
  {
    id: 3,
    from: 'Hamburg',
    to: 'Graz',
    date: '2020-10-12T07:22:52.4208588+00:00',
    delayed: false
  },
  { id: 4, from: 'Hamburg', to: 'Graz', date: '2020-10-12T09:22:52.4208588+00:00', delayed: false },
  {
    id: 5,
    from: 'Hamburg',
    to: 'Graz',
    date: '2020-10-12T12:22:52.4208588+00:00',
    delayed: false
  },
  { id: 7, from: 'Wien', to: 'Berlin', date: '2020-10-12T13:22:52.4208588+00:00', delayed: false },
  {
    id: 8,
    from: 'Wien',
    to: 'Berlin',
    date: '2020-10-12T14:22:52.4208588+00:00',
    delayed: false
  },
  { id: 9, from: 'Wien', to: 'München', date: '2020-10-12T15:22:52.4208588+00:00', delayed: false },
  {
    id: 10,
    from: 'Wien',
    to: 'München',
    date: '2020-10-12T16:22:52.4208588+00:00',
    delayed: false
  },
  { id: 11, from: 'Wien', to: 'München', date: '2020-10-12T17:22:52.4208588+00:00', delayed: false },
  {
    id: 12,
    from: 'Wien',
    to: 'Zürich',
    date: '2020-10-12T18:22:52.4208588+00:00',
    delayed: false
  },
  { id: 13, from: 'Wien', to: 'Zürich', date: '2020-10-12T19:22:52.4208588+00:00', delayed: false },
  {
    id: 14,
    from: 'Wien',
    to: 'Zürich',
    date: '2020-10-12T20:22:52.4208588+00:00',
    delayed: false
  },
  { id: 15, from: 'Wien', to: 'Bern', date: '2020-10-12T21:22:52.4208588+00:00', delayed: false },
  {
    id: 16,
    from: 'Wien',
    to: 'Bern',
    date: '2020-10-12T22:22:52.4208588+00:00',
    delayed: false
  },
  { id: 17, from: 'Wien', to: 'Bern', date: '2020-10-12T23:22:52.4208588+00:00', delayed: false },
  {
    id: 18,
    from: 'Wien',
    to: 'Frankfurt',
    date: '2020-10-13T00:22:52.4208588+00:00',
    delayed: false
  },
  { id: 19, from: 'Wien', to: 'Frankfurt', date: '2020-10-13T01:22:52.4208588+00:00', delayed: false },
  {
    id: 20,
    from: 'Wien',
    to: 'Frankfurt',
    date: '2020-10-13T02:22:52.4208588+00:00',
    delayed: false
  },
  { id: 21, from: 'Wien', to: 'Salzburg', date: '2020-10-13T03:22:52.4208588+00:00', delayed: false },
  {
    id: 22,
    from: 'Wien',
    to: 'Salzburg',
    date: '2020-10-13T04:22:52.4208588+00:00',
    delayed: false
  },
  { id: 23, from: 'Wien', to: 'Salzburg', date: '2020-10-13T05:22:52.4208588+00:00', delayed: false },
  {
    id: 24,
    from: 'Wien',
    to: 'Stuttgart',
    date: '2020-10-13T06:22:52.4208588+00:00',
    delayed: false
  },
  { id: 25, from: 'Wien', to: 'Stuttgart', date: '2020-10-13T07:22:52.4208588+00:00', delayed: false },
  {
    id: 26,
    from: 'Wien',
    to: 'Stuttgart',
    date: '2020-10-13T08:22:52.4208588+00:00',
    delayed: false
  },
  { id: 27, from: 'Berlin', to: 'Wien', date: '2020-10-13T09:22:52.4208588+00:00', delayed: false },
  {
    id: 28,
    from: 'Berlin',
    to: 'Wien',
    date: '2020-10-13T10:22:52.4208588+00:00',
    delayed: false
  },
  { id: 29, from: 'Berlin', to: 'Wien', date: '2020-10-13T11:22:52.4208588+00:00', delayed: false },
  {
    id: 30,
    from: 'Berlin',
    to: 'München',
    date: '2020-10-13T12:22:52.4208588+00:00',
    delayed: false
  },
  { id: 31, from: 'Berlin', to: 'München', date: '2020-10-13T13:22:52.4208588+00:00', delayed: false },
  {
    id: 32,
    from: 'Berlin',
    to: 'München',
    date: '2020-10-13T14:22:52.4208588+00:00',
    delayed: false
  },
  { id: 33, from: 'Berlin', to: 'Zürich', date: '2020-10-13T15:22:52.4208588+00:00', delayed: false },
  {
    id: 34,
    from: 'Berlin',
    to: 'Zürich',
    date: '2020-10-13T16:22:52.4208588+00:00',
    delayed: false
  },
  { id: 35, from: 'Berlin', to: 'Zürich', date: '2020-10-13T17:22:52.4208588+00:00', delayed: false },
  {
    id: 36,
    from: 'Berlin',
    to: 'Bern',
    date: '2020-10-13T18:22:52.4208588+00:00',
    delayed: false
  },
  { id: 37, from: 'Berlin', to: 'Bern', date: '2020-10-13T19:22:52.4208588+00:00', delayed: false },
  {
    id: 38,
    from: 'Berlin',
    to: 'Bern',
    date: '2020-10-13T20:22:52.4208588+00:00',
    delayed: false
  },
  { id: 39, from: 'Berlin', to: 'Frankfurt', date: '2020-10-13T21:22:52.4208588+00:00', delayed: false },
  {
    id: 40,
    from: 'Berlin',
    to: 'Frankfurt',
    date: '2020-10-13T22:22:52.4208588+00:00',
    delayed: false
  },
  { id: 41, from: 'Berlin', to: 'Frankfurt', date: '2020-10-13T23:22:52.4208588+00:00', delayed: false },
  {
    id: 42,
    from: 'Berlin',
    to: 'Salzburg',
    date: '2020-10-14T00:22:52.4208588+00:00',
    delayed: false
  },
  { id: 43, from: 'Berlin', to: 'Salzburg', date: '2020-10-14T01:22:52.4208588+00:00', delayed: false },
  {
    id: 44,
    from: 'Berlin',
    to: 'Salzburg',
    date: '2020-10-14T02:22:52.4208588+00:00',
    delayed: false
  },
  { id: 45, from: 'Berlin', to: 'Stuttgart', date: '2020-10-14T03:22:52.4208588+00:00', delayed: false },
  {
    id: 46,
    from: 'Berlin',
    to: 'Stuttgart',
    date: '2020-10-14T04:22:52.4208588+00:00',
    delayed: false
  },
  { id: 47, from: 'Berlin', to: 'Stuttgart', date: '2020-10-14T05:22:52.4208588+00:00', delayed: false },
  {
    id: 48,
    from: 'München',
    to: 'Wien',
    date: '2020-10-14T06:22:52.4208588+00:00',
    delayed: false
  },
  { id: 49, from: 'München', to: 'Wien', date: '2020-10-14T07:22:52.4208588+00:00', delayed: false },
  {
    id: 50,
    from: 'München',
    to: 'Wien',
    date: '2020-10-14T08:22:52.4208588+00:00',
    delayed: false
  },
  { id: 51, from: 'München', to: 'Berlin', date: '2020-10-14T09:22:52.4208588+00:00', delayed: false },
  {
    id: 52,
    from: 'München',
    to: 'Berlin',
    date: '2020-10-14T10:22:52.4208588+00:00',
    delayed: false
  },
  { id: 53, from: 'München', to: 'Berlin', date: '2020-10-14T11:22:52.4208588+00:00', delayed: false },
  {
    id: 54,
    from: 'München',
    to: 'Zürich',
    date: '2020-10-14T12:22:52.4208588+00:00',
    delayed: false
  },
  { id: 55, from: 'München', to: 'Zürich', date: '2020-10-14T13:22:52.4208588+00:00', delayed: false },
  {
    id: 56,
    from: 'München',
    to: 'Zürich',
    date: '2020-10-14T14:22:52.4208588+00:00',
    delayed: false
  },
  { id: 57, from: 'München', to: 'Bern', date: '2020-10-14T15:22:52.4208588+00:00', delayed: false },
  {
    id: 58,
    from: 'München',
    to: 'Bern',
    date: '2020-10-14T16:22:52.4208588+00:00',
    delayed: false
  },
  { id: 59, from: 'München', to: 'Bern', date: '2020-10-14T17:22:52.4208588+00:00', delayed: false },
  {
    id: 60,
    from: 'München',
    to: 'Frankfurt',
    date: '2020-10-14T18:22:52.4208588+00:00',
    delayed: false
  },
  { id: 61, from: 'München', to: 'Frankfurt', date: '2020-10-14T19:22:52.4208588+00:00', delayed: false },
  {
    id: 62,
    from: 'München',
    to: 'Frankfurt',
    date: '2020-10-14T20:22:52.4208588+00:00',
    delayed: false
  },
  { id: 63, from: 'München', to: 'Salzburg', date: '2020-10-14T21:22:52.4208588+00:00', delayed: false },
  {
    id: 64,
    from: 'München',
    to: 'Salzburg',
    date: '2020-10-14T22:22:52.4208588+00:00',
    delayed: false
  },
  { id: 65, from: 'München', to: 'Salzburg', date: '2020-10-14T23:22:52.4208588+00:00', delayed: false },
  {
    id: 66,
    from: 'München',
    to: 'Stuttgart',
    date: '2020-10-15T00:22:52.4208588+00:00',
    delayed: false
  },
  { id: 67, from: 'München', to: 'Stuttgart', date: '2020-10-15T01:22:52.4208588+00:00', delayed: false },
  {
    id: 68,
    from: 'München',
    to: 'Stuttgart',
    date: '2020-10-15T02:22:52.4208588+00:00',
    delayed: false
  },
  { id: 69, from: 'Zürich', to: 'Wien', date: '2020-10-15T03:22:52.4208588+00:00', delayed: false },
  {
    id: 70,
    from: 'Zürich',
    to: 'Wien',
    date: '2020-10-15T04:22:52.4208588+00:00',
    delayed: false
  },
  { id: 71, from: 'Zürich', to: 'Wien', date: '2020-10-15T05:22:52.4208588+00:00', delayed: false },
  {
    id: 72,
    from: 'Zürich',
    to: 'Berlin',
    date: '2020-10-15T06:22:52.4208588+00:00',
    delayed: false
  },
  { id: 73, from: 'Zürich', to: 'Berlin', date: '2020-10-15T07:22:52.4208588+00:00', delayed: false },
  {
    id: 74,
    from: 'Zürich',
    to: 'Berlin',
    date: '2020-10-15T08:22:52.4208588+00:00',
    delayed: false
  },
  { id: 75, from: 'Zürich', to: 'München', date: '2020-10-15T09:22:52.4208588+00:00', delayed: false },
  {
    id: 76,
    from: 'Zürich',
    to: 'München',
    date: '2020-10-15T10:22:52.4208588+00:00',
    delayed: false
  },
  { id: 77, from: 'Zürich', to: 'München', date: '2020-10-15T11:22:52.4208588+00:00', delayed: false },
  {
    id: 78,
    from: 'Zürich',
    to: 'Bern',
    date: '2020-10-15T12:22:52.4208588+00:00',
    delayed: false
  },
  { id: 79, from: 'Zürich', to: 'Bern', date: '2020-10-15T13:22:52.4208588+00:00', delayed: false },
  {
    id: 80,
    from: 'Zürich',
    to: 'Bern',
    date: '2020-10-15T14:22:52.4208588+00:00',
    delayed: false
  },
  { id: 81, from: 'Zürich', to: 'Frankfurt', date: '2020-10-15T15:22:52.4208588+00:00', delayed: false },
  {
    id: 82,
    from: 'Zürich',
    to: 'Frankfurt',
    date: '2020-10-15T16:22:52.4208588+00:00',
    delayed: false
  },
  { id: 83, from: 'Zürich', to: 'Frankfurt', date: '2020-10-15T17:22:52.4208588+00:00', delayed: false },
  {
    id: 84,
    from: 'Zürich',
    to: 'Salzburg',
    date: '2020-10-15T18:22:52.4208588+00:00',
    delayed: false
  },
  { id: 85, from: 'Zürich', to: 'Salzburg', date: '2020-10-15T19:22:52.4208588+00:00', delayed: false },
  {
    id: 86,
    from: 'Zürich',
    to: 'Salzburg',
    date: '2020-10-15T20:22:52.4208588+00:00',
    delayed: false
  },
  { id: 87, from: 'Zürich', to: 'Stuttgart', date: '2020-10-15T21:22:52.4208588+00:00', delayed: false },
  {
    id: 88,
    from: 'Zürich',
    to: 'Stuttgart',
    date: '2020-10-15T22:22:52.4208588+00:00',
    delayed: false
  },
  { id: 89, from: 'Zürich', to: 'Stuttgart', date: '2020-10-15T23:22:52.4208588+00:00', delayed: false },
  {
    id: 90,
    from: 'Bern',
    to: 'Wien',
    date: '2020-10-16T00:22:52.4208588+00:00',
    delayed: false
  },
  { id: 91, from: 'Bern', to: 'Wien', date: '2020-10-16T01:22:52.4208588+00:00', delayed: false },
  {
    id: 92,
    from: 'Bern',
    to: 'Wien',
    date: '2020-10-16T02:22:52.4208588+00:00',
    delayed: false
  },
  { id: 93, from: 'Bern', to: 'Berlin', date: '2020-10-16T03:22:52.4208588+00:00', delayed: false },
  {
    id: 94,
    from: 'Bern',
    to: 'Berlin',
    date: '2020-10-16T04:22:52.4208588+00:00',
    delayed: false
  },
  { id: 95, from: 'Bern', to: 'Berlin', date: '2020-10-16T05:22:52.4208588+00:00', delayed: false },
  {
    id: 96,
    from: 'Bern',
    to: 'München',
    date: '2020-10-16T06:22:52.4208588+00:00',
    delayed: false
  },
  { id: 97, from: 'Bern', to: 'München', date: '2020-10-16T07:22:52.4208588+00:00', delayed: false },
  {
    id: 98,
    from: 'Bern',
    to: 'München',
    date: '2020-10-16T08:22:52.4208588+00:00',
    delayed: false
  },
  { id: 99, from: 'Bern', to: 'Zürich', date: '2020-10-16T09:22:52.4208588+00:00', delayed: false },
  {
    id: 100,
    from: 'Bern',
    to: 'Zürich',
    date: '2020-10-16T10:22:52.4208588+00:00',
    delayed: false
  },
  { id: 101, from: 'Bern', to: 'Zürich', date: '2020-10-16T11:22:52.4208588+00:00', delayed: false },
  {
    id: 102,
    from: 'Bern',
    to: 'Frankfurt',
    date: '2020-10-16T12:22:52.4208588+00:00',
    delayed: false
  },
  { id: 103, from: 'Bern', to: 'Frankfurt', date: '2020-10-16T13:22:52.4208588+00:00', delayed: false },
  {
    id: 104,
    from: 'Bern',
    to: 'Frankfurt',
    date: '2020-10-16T14:22:52.4208588+00:00',
    delayed: false
  },
  { id: 105, from: 'Bern', to: 'Salzburg', date: '2020-10-16T15:22:52.4208588+00:00', delayed: false },
  {
    id: 106,
    from: 'Bern',
    to: 'Salzburg',
    date: '2020-10-16T16:22:52.4208588+00:00',
    delayed: false
  },
  { id: 107, from: 'Bern', to: 'Salzburg', date: '2020-10-16T17:22:52.4208588+00:00', delayed: false },
  {
    id: 108,
    from: 'Bern',
    to: 'Stuttgart',
    date: '2020-10-16T18:22:52.4208588+00:00',
    delayed: false
  },
  { id: 109, from: 'Bern', to: 'Stuttgart', date: '2020-10-16T19:22:52.4208588+00:00', delayed: false },
  {
    id: 110,
    from: 'Bern',
    to: 'Stuttgart',
    date: '2020-10-16T20:22:52.4208588+00:00',
    delayed: false
  },
  { id: 111, from: 'Frankfurt', to: 'Wien', date: '2020-10-16T21:22:52.4208588+00:00', delayed: false },
  {
    id: 112,
    from: 'Frankfurt',
    to: 'Wien',
    date: '2020-10-16T22:22:52.4208588+00:00',
    delayed: false
  },
  { id: 113, from: 'Frankfurt', to: 'Wien', date: '2020-10-16T23:22:52.4208588+00:00', delayed: false },
  {
    id: 114,
    from: 'Frankfurt',
    to: 'Berlin',
    date: '2020-10-17T00:22:52.4208588+00:00',
    delayed: false
  },
  { id: 115, from: 'Frankfurt', to: 'Berlin', date: '2020-10-17T01:22:52.4208588+00:00', delayed: false },
  {
    id: 116,
    from: 'Frankfurt',
    to: 'Berlin',
    date: '2020-10-17T02:22:52.4208588+00:00',
    delayed: false
  },
  { id: 117, from: 'Frankfurt', to: 'München', date: '2020-10-17T03:22:52.4208588+00:00', delayed: false },
  {
    id: 118,
    from: 'Frankfurt',
    to: 'München',
    date: '2020-10-17T04:22:52.4208588+00:00',
    delayed: false
  },
  { id: 119, from: 'Frankfurt', to: 'München', date: '2020-10-17T05:22:52.4208588+00:00', delayed: false },
  {
    id: 120,
    from: 'Frankfurt',
    to: 'Zürich',
    date: '2020-10-17T06:22:52.4208588+00:00',
    delayed: false
  },
  { id: 121, from: 'Frankfurt', to: 'Zürich', date: '2020-10-17T07:22:52.4208588+00:00', delayed: false },
  {
    id: 122,
    from: 'Frankfurt',
    to: 'Zürich',
    date: '2020-10-17T08:22:52.4208588+00:00',
    delayed: false
  },
  { id: 123, from: 'Frankfurt', to: 'Bern', date: '2020-10-17T09:22:52.4208588+00:00', delayed: false },
  {
    id: 124,
    from: 'Frankfurt',
    to: 'Bern',
    date: '2020-10-17T10:22:52.4208588+00:00',
    delayed: false
  },
  { id: 125, from: 'Frankfurt', to: 'Bern', date: '2020-10-17T11:22:52.4208588+00:00', delayed: false },
  {
    id: 126,
    from: 'Frankfurt',
    to: 'Salzburg',
    date: '2020-10-17T12:22:52.4208588+00:00',
    delayed: false
  },
  { id: 127, from: 'Frankfurt', to: 'Salzburg', date: '2020-10-17T13:22:52.4208588+00:00', delayed: false },
  {
    id: 128,
    from: 'Frankfurt',
    to: 'Salzburg',
    date: '2020-10-17T14:22:52.4208588+00:00',
    delayed: false
  },
  {
    id: 129,
    from: 'Frankfurt',
    to: 'Stuttgart',
    date: '2020-10-17T15:22:52.4208588+00:00',
    delayed: false
  },
  {
    id: 130,
    from: 'Frankfurt',
    to: 'Stuttgart',
    date: '2020-10-17T16:22:52.4208588+00:00',
    delayed: false
  },
  {
    id: 131,
    from: 'Frankfurt',
    to: 'Stuttgart',
    date: '2020-10-17T17:22:52.4208588+00:00',
    delayed: false
  },
  { id: 132, from: 'Salzburg', to: 'Wien', date: '2020-10-17T18:22:52.4208588+00:00', delayed: false },
  {
    id: 133,
    from: 'Salzburg',
    to: 'Wien',
    date: '2020-10-17T19:22:52.4208588+00:00',
    delayed: false
  },
  { id: 134, from: 'Salzburg', to: 'Wien', date: '2020-10-17T20:22:52.4208588+00:00', delayed: false },
  {
    id: 135,
    from: 'Salzburg',
    to: 'Berlin',
    date: '2020-10-17T21:22:52.4208588+00:00',
    delayed: false
  },
  { id: 136, from: 'Salzburg', to: 'Berlin', date: '2020-10-17T22:22:52.4208588+00:00', delayed: false },
  {
    id: 137,
    from: 'Salzburg',
    to: 'Berlin',
    date: '2020-10-17T23:22:52.4208588+00:00',
    delayed: false
  },
  { id: 138, from: 'Salzburg', to: 'München', date: '2020-10-18T00:22:52.4208588+00:00', delayed: false },
  {
    id: 139,
    from: 'Salzburg',
    to: 'München',
    date: '2020-10-18T01:22:52.4208588+00:00',
    delayed: false
  },
  { id: 140, from: 'Salzburg', to: 'München', date: '2020-10-18T02:22:52.4208588+00:00', delayed: false },
  {
    id: 141,
    from: 'Salzburg',
    to: 'Zürich',
    date: '2020-10-18T03:22:52.4208588+00:00',
    delayed: false
  },
  { id: 142, from: 'Salzburg', to: 'Zürich', date: '2020-10-18T04:22:52.4208588+00:00', delayed: false },
  {
    id: 143,
    from: 'Salzburg',
    to: 'Zürich',
    date: '2020-10-18T05:22:52.4208588+00:00',
    delayed: false
  },
  { id: 144, from: 'Salzburg', to: 'Bern', date: '2020-10-18T06:22:52.4208588+00:00', delayed: false },
  {
    id: 145,
    from: 'Salzburg',
    to: 'Bern',
    date: '2020-10-18T07:22:52.4208588+00:00',
    delayed: false
  },
  { id: 146, from: 'Salzburg', to: 'Bern', date: '2020-10-18T08:22:52.4208588+00:00', delayed: false },
  {
    id: 147,
    from: 'Salzburg',
    to: 'Frankfurt',
    date: '2020-10-18T09:22:52.4208588+00:00',
    delayed: false
  },
  { id: 148, from: 'Salzburg', to: 'Frankfurt', date: '2020-10-18T10:22:52.4208588+00:00', delayed: false },
  {
    id: 149,
    from: 'Salzburg',
    to: 'Frankfurt',
    date: '2020-10-18T11:22:52.4208588+00:00',
    delayed: false
  },
  { id: 150, from: 'Salzburg', to: 'Stuttgart', date: '2020-10-18T12:22:52.4208588+00:00', delayed: false },
  {
    id: 151,
    from: 'Salzburg',
    to: 'Stuttgart',
    date: '2020-10-18T13:22:52.4208588+00:00',
    delayed: false
  },
  { id: 152, from: 'Salzburg', to: 'Stuttgart', date: '2020-10-18T14:22:52.4208588+00:00', delayed: false },
  {
    id: 153,
    from: 'Stuttgart',
    to: 'Wien',
    date: '2020-10-18T15:22:52.4208588+00:00',
    delayed: false
  },
  { id: 154, from: 'Stuttgart', to: 'Wien', date: '2020-10-18T16:22:52.4208588+00:00', delayed: false },
  {
    id: 155,
    from: 'Stuttgart',
    to: 'Wien',
    date: '2020-10-18T17:22:52.4208588+00:00',
    delayed: false
  },
  { id: 156, from: 'Stuttgart', to: 'Berlin', date: '2020-10-18T18:22:52.4208588+00:00', delayed: false },
  {
    id: 157,
    from: 'Stuttgart',
    to: 'Berlin',
    date: '2020-10-18T19:22:52.4208588+00:00',
    delayed: false
  },
  { id: 158, from: 'Stuttgart', to: 'Berlin', date: '2020-10-18T20:22:52.4208588+00:00', delayed: false },
  {
    id: 159,
    from: 'Stuttgart',
    to: 'München',
    date: '2020-10-18T21:22:52.4208588+00:00',
    delayed: false
  },
  { id: 160, from: 'Stuttgart', to: 'München', date: '2020-10-18T22:22:52.4208588+00:00', delayed: false },
  {
    id: 161,
    from: 'Stuttgart',
    to: 'München',
    date: '2020-10-18T23:22:52.4208588+00:00',
    delayed: false
  },
  { id: 162, from: 'Stuttgart', to: 'Zürich', date: '2020-10-19T00:22:52.4208588+00:00', delayed: false },
  {
    id: 163,
    from: 'Stuttgart',
    to: 'Zürich',
    date: '2020-10-19T01:22:52.4208588+00:00',
    delayed: false
  },
  { id: 164, from: 'Stuttgart', to: 'Zürich', date: '2020-10-19T02:22:52.4208588+00:00', delayed: false },
  {
    id: 165,
    from: 'Stuttgart',
    to: 'Bern',
    date: '2020-10-19T03:22:52.4208588+00:00',
    delayed: false
  },
  { id: 166, from: 'Stuttgart', to: 'Bern', date: '2020-10-19T04:22:52.4208588+00:00', delayed: false },
  {
    id: 167,
    from: 'Stuttgart',
    to: 'Bern',
    date: '2020-10-19T05:22:52.4208588+00:00',
    delayed: false
  },
  {
    id: 168,
    from: 'Stuttgart',
    to: 'Frankfurt',
    date: '2020-10-19T06:22:52.4208588+00:00',
    delayed: false
  },
  {
    id: 169,
    from: 'Stuttgart',
    to: 'Frankfurt',
    date: '2020-10-19T07:22:52.4208588+00:00',
    delayed: false
  },
  {
    id: 170,
    from: 'Stuttgart',
    to: 'Frankfurt',
    date: '2020-10-19T08:22:52.4208588+00:00',
    delayed: false
  },
  { id: 171, from: 'Stuttgart', to: 'Salzburg', date: '2020-10-19T09:22:52.4208588+00:00', delayed: false },
  {
    id: 172,
    from: 'Stuttgart',
    to: 'Salzburg',
    date: '2020-10-19T10:22:52.4208588+00:00',
    delayed: false
  },
  { id: 173, from: 'Stuttgart', to: 'Salzburg', date: '2020-10-19T11:22:52.4208588+00:00', delayed: false },
  {
    id: 175,
    from: 'Wien',
    to: 'Stuttgart',
    date: '2020-10-13T06:22:52.4208588+00:00',
    delayed: false
  },
  { id: 176, from: 'Wien', to: 'Stuttgart', date: '2020-10-13T06:22:52.4208588+00:00', delayed: false },
  {
    id: 174,
    from: 'Wien',
    to: 'Stuttgart',
    date: '2020-10-13T06:22:52.4208588+00:00',
    delayed: false
  },
  { id: 6, from: 'Munich', to: 'Graz', date: '2020-10-12T07:22:52.4208588+00:00', delayed: true },
  {
    id: 178,
    from: 'Wien',
    to: 'Salzburg',
    date: '2020-10-22T00:00:00',
    delayed: true
  },
  { id: 179, from: 'Wien', to: 'Salzburg', date: '2020-10-22T00:00:00', delayed: true },
  {
    id: 180,
    from: 'Wien',
    to: 'Salzburg',
    date: '2020-10-22T00:00:00',
    delayed: true
  },
  { id: 181, from: 'Wien', to: 'Salzburg', date: '2020-10-22T00:00:00', delayed: true },
  {
    id: 182,
    from: 'Wien',
    to: 'Salzburg',
    date: '2020-10-22T00:00:00',
    delayed: true
  },
  { id: 183, from: 'Wien', to: 'Salzburg', date: '2020-10-22T00:00:00', delayed: true },
  {
    id: 177,
    from: 'Graz',
    to: 'Hamburg',
    date: '2020-07-17T00:00:00',
    delayed: true
  },
  { id: 186, from: 'aaaa', to: 'aaaa', date: '2020-11-11T00:00:00', delayed: false },
  {
    id: 187,
    from: 'Houssem',
    to: 'Houssem',
    date: '2020-11-03T00:00:00',
    delayed: false
  },
  { id: 185, from: 'Graz', to: 'Hamburg', date: '2020-10-29T06:15:52.4208588+00:00', delayed: true },
  {
    id: 184,
    from: 'Graz',
    to: 'Wien',
    date: '2022-07-17T00:00:00',
    delayed: false
  },
  { id: 188, from: 'q', to: 'q', date: '2022-07-17T00:00:00', delayed: false }
];
