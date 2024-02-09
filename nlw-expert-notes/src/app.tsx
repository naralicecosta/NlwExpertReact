import logo from './assets/logo-nlw-expert.svg'
import { NoteCard } from './components/note-card'

export function App(){
  return (
    <div className="mx-auto max-w6xl my-12 space-y-6">
      <img src={logo} alt='NLW Expert'/>

      <form className='w-full'>
        <input
         type="text" 
         placeholder='Busque em suas notas...'
         className='w-full bg-transparent text-3xl font-semibold outline-none tracking-tight placeholder:text-slate-500' />
      </form>

      <div className='h-px bg-slate-700'></div>

      <div className='grid grid-cols-3 auto-rows-[250px]W'>
        <div className='rounded-md bg-slate-700 p-5 space-y-3W'>
          <span className='text-sm font-medium text-slate-200'>Adicionar nota</span>
          <p className='text-sm leading-6 text-slate-400'>Grave um audio...</p>
        </div>

        <NoteCard />

      </div>
    </div>
  )
}