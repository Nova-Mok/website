import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="divide-y divide-gray-200 dark:divide-gray-700 ">
      <div className=""></div>
      <div className="mt-20 mb-8 flex flex-col pt-4 md:flex-row md:items-center md:justify-between">
        <div className="text-md mb-8 text-gray-500 dark:text-gray-400 md:mb-0">
          <Link href="https://Fanbaseai.com">
            Copyright © 2023 Fanbaseai, Inc. All rights reserved.
          </Link>
        </div>

        <div className="flex space-x-5">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
      </div>
    </footer>
  )
}
