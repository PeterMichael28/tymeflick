import Button from '../../components/button/button'
import { openThemeCustomizerModal } from '../../redux/slice/modalSlice'
import { useDispatch } from 'react-redux'

const BrandTheme = () => {
  const dispatch = useDispatch()
  return (
    <div className="font-bricolage space-y-3 pt-4">
      <div className="mb-6">
        <p className="text-xl font-bold">Brand & Theme</p>
        <p className="text-gray-600">
          Customize your brand color and logo for a cohesive experience
        </p>
      </div>

      <div className="rounded-lg border border-[#D2D9DF] p-4">
        <p className="font-bold text-[#2B323B]">Current Theme</p>

        <div className="mt-4 flex justify-between">
          <div className="flex items-center gap-7">
            <div className="flex size-16 items-center justify-center rounded-lg border border-[#D2D9DF]">
              <p className="bg-primary size-8 rounded-md"></p>
            </div>

            <div>
              <div className="flex flex-1 justify-between space-x-6">
                <span className="flex items-center gap-2">
                  <p className="bg-primary size-4"></p>
                  <p className="text-[#8898AA]">Primary</p>
                </span>
                <span className="flex items-center gap-2">
                  <p className="size-4 border border-[#D2D9DF] bg-white"></p>
                  <p className="text-[#8898AA]">Secondary 1</p>
                </span>
                <span className="flex items-center gap-2">
                  <p className="size-4 bg-black"></p>
                  <p className="text-[#8898AA]">Secondary 2</p>
                </span>
              </div>
              <button className="mt-2 text-xs text-[#2B323B]">
                Reset to default
              </button>
            </div>
          </div>
          <Button
            className="h-13 text-sm font-semibold"
            onClick={() => dispatch(openThemeCustomizerModal())}
          >
            <p>Open Theme Customizer</p>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BrandTheme
