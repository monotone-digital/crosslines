import Image from 'next/image';
import {
  MoveHorizontal,
  PanelTopOpen,
  PanelsTopLeft,
  Square,
} from 'lucide-react';

const windowTypes = [
  {
    id: 'casement',
    number: '01',
    icon: PanelTopOpen,
    title: 'Openable / casement',
    movement: 'Side-hinged',
    opening: 'Full sash',
    bestFor: 'Bedrooms, living rooms and exposed elevations',
    image: '/images/window-type-casement.webp',
    imageAlt:
      'A black uPVC casement window with its side-hinged sash opened inward',
    copy: 'The default and the best-sealing window we make. The sash presses into the frame so the seal compresses rather than slides.',
    limit:
      'It needs clear space to swing. On a narrow side passage or above a footpath, a slider may be the better answer.',
  },
  {
    id: 'sliding-2-track',
    number: '02',
    icon: MoveHorizontal,
    title: 'Sliding, 2-track',
    movement: 'Slides horizontally',
    opening: 'Up to half',
    bestFor: 'Compact rooms, passages and everyday openings',
    image: '/images/window-type-sliding-2-track.webp',
    imageAlt:
      'A black two-track uPVC sliding window with one sash moved halfway open',
    copy: 'Two sashes on two tracks, each passing the other. Nothing swings into the room and half the opening can stand open.',
    limit:
      'A sliding sash brushes past its track, so it will never seal as tightly as a casement on an exposed or dusty elevation.',
  },
  {
    id: 'sliding-3-track',
    number: '03',
    icon: PanelsTopLeft,
    title: 'Sliding, 3-track',
    movement: 'Three sliding planes',
    opening: 'Up to two-thirds',
    bestFor: 'Wide openings or a dedicated insect-mesh track',
    image: '/images/window-type-sliding-3-track.webp',
    imageAlt:
      'A wide black three-track uPVC window with three staggered sliding panels',
    copy: 'A wider system for more glass in motion, or for carrying an insect mesh on a track of its own.',
    limit: 'The frame is deeper and there is more track to keep clean.',
  },
  {
    id: 'fixed',
    number: '04',
    icon: Square,
    title: 'Fixed',
    movement: 'No moving parts',
    opening: 'None',
    bestFor: 'Views, daylight and hard-to-reach glazing',
    image: '/images/window-type-fixed.webp',
    imageAlt:
      'A large fixed black uPVC picture window with one uninterrupted pane and no opening hardware',
    copy: 'Light and view with nothing to open or seal against. The tightest and most economical option per square foot.',
    limit:
      'No ventilation, so it is usually paired with an openable sash in the same run.',
  },
];

export function WindowTypeExplorer() {
  return (
    <div className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {windowTypes.map((type) => {
        const Icon = type.icon;

        return (
          <article
            key={type.id}
            className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-line bg-paper transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-sand xl:aspect-[5/4]">
              <Image
                src={type.image}
                alt={type.imageAlt}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/5 to-black/10" />
              <span className="absolute left-4 top-4 text-[0.65rem] font-semibold tracking-[0.16em] text-white/72">
                {type.number}
              </span>
              <span className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-white/25 bg-black/15 text-white backdrop-blur-md">
                <Icon className="size-4" strokeWidth={1.4} />
              </span>
              <div className="absolute inset-x-4 bottom-4 text-white">
                <p className="text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-white/58">
                  {type.movement}
                </p>
                <h3 className="mt-1.5 text-2xl font-medium leading-none tracking-[-0.035em]">
                  {type.title}
                </h3>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs leading-5 text-muted">{type.copy}</p>

              <dl className="mt-5 grid grid-cols-[1fr_auto] gap-4 rounded-xl bg-sand p-4">
                <div>
                  <dt className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-gold-deep">
                    Best for
                  </dt>
                  <dd className="mt-1.5 text-xs font-medium leading-4 text-ink">
                    {type.bestFor}
                  </dd>
                </div>
                <div className="border-l border-line pl-4">
                  <dt className="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-gold-deep">
                    Opening
                  </dt>
                  <dd className="mt-1.5 whitespace-nowrap text-xs font-medium text-ink">
                    {type.opening}
                  </dd>
                </div>
              </dl>

              <p className="mt-4 border-t border-line pt-4 text-[0.68rem] leading-[1.15rem] text-muted">
                <strong className="font-semibold text-ink">Limited by:</strong>{' '}
                {type.limit}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
