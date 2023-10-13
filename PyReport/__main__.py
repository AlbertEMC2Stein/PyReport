import argparse as ap
import os
import sys

from . import get_info, ROOT_DIR

def run_docs(args):
    sys.path.append(os.path.join(ROOT_DIR, 'docs'))
    
    from docs.makedocs import build
    print("Building documentation...")
    build(args.output_directory, args.keep_temporary_files)
    print("Done!")

def run_test(args):
    from ._utils import make_test_report

    print("Building test report...")
    make_test_report()


def cli_entry():
    parser = ap.ArgumentParser(
        prog='PyReport',
        description=get_info()['description'],
        epilog='For more information, visit: https://github.com/AlbertEMC2Stein/PyReport'
    )
    parser.add_argument('-v', '--version', action='version', version=get_info()['version'])
    parser._positionals.title = 'Commands'
    parser._optionals.title = 'Options'

    subparsers = parser.add_subparsers()

    # Building documentation
    parser_docs = subparsers.add_parser('docs', help='build documentation')
    parser_docs.add_argument('-o', '--output-directory', type=str, default='.', dest='output_directory', help="Output directory (default: '.')")
    parser_docs.add_argument('-k', '--keep', action='store_true', dest='keep_temporary_files', help='Keep temporary files')
    parser_docs.set_defaults(func=run_docs)

    # Test report
    parser_test = subparsers.add_parser('test', help='build test report')
    parser_test.set_defaults(func=run_test)

    args = parser.parse_args()
    try:
        args.func(args)
    except AttributeError:
        parser.print_help()
        parser.exit()

########################################################################

if __name__ == "__main__":
    print("PyReport version", get_info()["version"])

    cli_entry()