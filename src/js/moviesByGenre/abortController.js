let curentAbort = new AbortController();
export function doAnAbort() {
  curentAbort.abort();
  curentAbort = new AbortController();
  return curentAbort;
}
