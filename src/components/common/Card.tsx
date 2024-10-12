import type { CollectionEntry } from "astro:content";
import { Icon } from "astro-icon/components";
import { formatdate, striphtmltags } from "~/utils/utils";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"post">["data"];
  secHeading?: boolean;
  key?: string;
}

export default function Card({ href, frontmatter }: Props) {
  const { title, publishDate, excerpt } = frontmatter;

return (
  <li class="mb-12 md:mb-4">
    <div class="mt-2">
    <header>
      <div class="mb-1">
        <span class="text-sm">
          <Icon name="tabler:clock" class="w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" />
          <time datetime={formatdate(publishDate)} class="inline-block">{formatdate(publishDate)}</time>
          <Icon name="tabler:user" class="w-3.5 h-3.5 inline-block -mt-0.5 dark:text-gray-400" />
        </span>
      </div>
      <h2 class="text-xl sm:text-xl font-bold leading-tight mb-2 font-heading dark:text-slate-300">
        <a
          class="inline-block hover:text-primary dark:hover:text-blue-700 transition ease-in duration-200"
          href={href}
        >
          {title}
        </a>
      </h2>
    </header>

    {excerpt && <p class="flex-grow text-muted dark:text-slate-400 text-sm">{striphtmltags(excerpt)}</p>}
    
  </div>
  </li>
);
}
