import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the acronym in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the acronym.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="correct"
        />
        <Cell value="P" />
        <Cell value="M" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter A is in the acronym and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="O" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="B"
          status="present"
        />
        <Cell value="P" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter B is in the acronym but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="L" />
        <Cell value="D" />
        <Cell isRevealing={true} isCompleted={true} value="M" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter M is not in the acronym in any spot.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/ggrana90/react-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
