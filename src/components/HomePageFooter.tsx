export function HomeFooter() {
  return (
    <footer>
      <div className="mx-auto max-w-[1260px] px-4 pb-4 pt-40">
        <div className="flex flex-col justify-between space-y-4 text-xs sm:flex-row sm:space-y-0">
          <p className="text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} YYC Tech
          </p>
          <p className="text-zinc-400 dark:text-zinc-500">
            Photo by{' '}
            <a
              href="https://unsplash.com/@quinterocamilaa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
              className="underline hover:text-zinc-300"
            >
              Camila Quintero Franco
            </a>{' '}
            on{' '}
            <a
              href="https://unsplash.com"
              className="underline hover:text-zinc-300"
            >
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
