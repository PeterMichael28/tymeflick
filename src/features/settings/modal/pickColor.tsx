import { useState } from 'react'
import Button from '../../../components/button/button'
import { closeThemeCustomizerModal } from '../../../redux/slice/modalSlice'
import { useDispatch } from 'react-redux'

// Convert HSL + A to CSS rgba
// function hslToRgba(h: number, s: number, l: number, a: number) {
//   s /= 100
//   l /= 100

//   const k = (n: number) => (n + h / 30) % 12
//   const p = s * Math.min(l, 1 - l)
//   const f = (n: number) =>
//     l - p * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))

//   const r = Math.round(255 * f(0))
//   const g = Math.round(255 * f(8))
//   const b = Math.round(255 * f(4))

//   return `rgba(${r}, ${g}, ${b}, ${a})`
// }

// HSL -> HEX (with alpha)
function hslaToHex(h: number, s: number, l: number, a: number) {
  s /= 100
  l /= 100

  const k = (n: number) => (n + h / 30) % 12
  const p = s * Math.min(l, 1 - l)
  const f = (n: number) =>
    l - p * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))

  const r = Math.round(255 * f(0))
  const g = Math.round(255 * f(8))
  const b = Math.round(255 * f(4))

  const alphaHex = Math.round(a * 255)
    .toString(16)
    .padStart(2, '0')

  return `#${[r, g, b]
    .map((x) => x.toString(16).padStart(2, '0'))
    .join('')}${alphaHex}`
}

const ColorPicker = () => {
  const [hue, setHue] = useState(200)
  const [saturation, setSaturation] = useState(50)
  const [lightness, setLightness] = useState(50)
  const [alpha, setAlpha] = useState(1)
  const dispatch = useDispatch()

  //   const rgbaColor = hslToRgba(hue, saturation, lightness, alpha)
  const hexColor = hslaToHex(hue, saturation, lightness, alpha)

  const applyColor = () => {
    document.documentElement.style.setProperty('--user-primary', hexColor)
    dispatch(closeThemeCustomizerModal())
  }

  return (
    <div className="flex w-full flex-col gap-6 p-4">
      {/* SATURATION–LIGHTNESS square */}
      <div className="flex w-full items-center justify-between gap-6">
        <div className="flex h-[40vh] w-full flex-col justify-between bg-white p-5 shadow-md">
          <div
            className="relative h-44 w-full cursor-crosshair rounded"
            style={{
              background: `linear-gradient(to right, white, hsl(${hue},100%,50%))`,
            }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = ((e.clientX - rect.left) / rect.width) * 100
              const y = ((e.clientY - rect.top) / rect.height) * 100

              setSaturation(Math.round(x))
              setLightness(Math.round(100 - y))
            }}
          >
            {/* Black overlay (lightness control) */}
            <div className="absolute inset-0 bg-linear-to-t from-black"></div>

            {/* Pointer */}
            <div
              className="absolute h-4 w-4 rounded-full border border-white shadow"
              style={{
                left: `${saturation}%`,
                top: `${100 - lightness}%`,
                transform: 'translate(-50%, -50%)',
              }}
            ></div>
          </div>
          <div className="mt-2">
            <p className="font-bricolage font-medium">Primary Hex</p>
            <p className="rounded-md bg-[#F2F0F580] p-4 font-mono text-sm">
              {hexColor}
            </p>
          </div>
        </div>

        <div className="font-bricolage h-[40vh] w-full bg-white p-5 shadow-md">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm font-medium">Color Control</p>
            <p className="text-xs font-normal text-[#717182]">
              Fine-tune your color selection
            </p>
          </div>
          {/* HUE */}
          <label className="text-xs font-medium">Hue</label>
          <input
            type="range"
            min="0"
            max="360"
            value={hue}
            onChange={(e) => setHue(Number(e.target.value))}
            className="w-full"
            style={{
              background:
                'linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red)',
            }}
          />

          {/* SATURATION */}
          <label className="text-xs font-medium">Saturation</label>
          <input
            type="range"
            min="0"
            max="100"
            value={saturation}
            onChange={(e) => setSaturation(Number(e.target.value))}
            className="w-full"
          />

          {/* LIGHTNESS */}
          <label className="text-xs font-medium">Lightness</label>
          <input
            type="range"
            min="0"
            max="100"
            value={lightness}
            onChange={(e) => setLightness(Number(e.target.value))}
            className="w-full"
          />

          {/* ALPHA */}
          <label className="text-xs font-medium">Alpha</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={alpha}
            onChange={(e) => setAlpha(Number(e.target.value))}
            className="w-full bg-gray-200"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <button
          className="w-full font-normal text-[#606060]"
          onClick={() => dispatch(closeThemeCustomizerModal())}
        >
          Cancel
        </button>
        <Button className="h-11 w-full font-normal" onClick={applyColor}>
          Apply
        </Button>
      </div>
    </div>
  )
}

export default ColorPicker
