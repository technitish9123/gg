import { schedule } from '@netlify/functions';

// To learn about scheduled functions and supported cron extensions, 
// see: https://ntl.fyi/sched-func
export const handler = () =>
fetch("/functions/test", { headers: { accept: "Accept: application/json" } })
  .then((x) => x.json())
//   .then(({ msg }) => setMsg(msg))