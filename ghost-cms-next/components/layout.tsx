import Header from './Header'

export default function Layout({ children }:any) {
  return (
    <>
      <Header />
      <main className=' pt-16'>{children}</main>
    </>
  )
}