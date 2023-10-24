URLS=[
"index.html",
"maths.html",
"report.html",
"symbols/index.html",
"symbols/greek.html",
"symbols/hebrew.html",
"symbols/latin.html"
];
INDEX=[
{
"ref":"pyreport",
"url":0,
"doc":"pyreport: Automate Your $\\LaTeX$ Reports with Python \ud83d\udcdd Create elegant LaTeX reports effortlessly from your code with pyreport. Generate and populate reports with plots, tables, custom environments, commands, and structure, all within your Python environment. Say goodbye to LaTeX headaches and focus on your work while pyreport handles the document creation for you. - Automate LaTeX Reporting: Generate LaTeX reports seamlessly during your computations. - Dynamic Content: Add plots, tables, variable logs, and custom LaTeX elements effortlessly. - Structure Your Report: Define sections, chapters, and more for a well-organized document. - Focus on Your Work: Stop worrying about LaTeX intricacies and focus on your data and analysis. Simplify your report creation process with pyreport. No LaTeX expertise required."
},
{
"ref":"pyreport.get_info",
"url":0,
"doc":"Get the package information.",
"func":1
},
{
"ref":"pyreport.maths",
"url":1,
"doc":""
},
{
"ref":"pyreport.maths.choice",
"url":1,
"doc":" Generates a random sample from a given 1-D array  versionadded 1.7.0  note New code should use the  ~numpy.random.Generator.choice method of a  ~numpy.random.Generator instance instead; please see the :ref: random-quick-start . Parameters      a : 1-D array-like or int If an ndarray, a random sample is generated from its elements. If an int, the random sample is generated as if it were  np.arange(a) size : int or tuple of ints, optional Output shape. If the given shape is, e.g.,  (m, n, k) , then  m  n  k samples are drawn. Default is None, in which case a single value is returned. replace : boolean, optional Whether the sample is with or without replacement. Default is True, meaning that a value of  a can be selected multiple times. p : 1-D array-like, optional The probabilities associated with each entry in a. If not given, the sample assumes a uniform distribution over all entries in  a . Returns    - samples : single item or ndarray The generated random samples Raises    ValueError If a is an int and less than zero, if a or p are not 1-dimensional, if a is an array-like of size 0, if p is not a vector of probabilities, if a and p have different lengths, or if replace=False and the sample size is greater than the population size See Also     randint, shuffle, permutation random.Generator.choice: which should be used in new code Notes   - Setting user-specified probabilities through  p uses a more general but less efficient sampler than the default. The general sampler produces a different sample than the optimized sampler even if each element of  p is 1 / len(a). Sampling random rows from a 2-D array is not possible with this function, but is possible with  Generator.choice through its  axis keyword. Examples     Generate a uniform random sample from np.arange(5) of size 3: >>> np.random.choice(5, 3) array([0, 3, 4])  random >>>  This is equivalent to np.random.randint(0,5,3) Generate a non-uniform random sample from np.arange(5) of size 3: >>> np.random.choice(5, 3, p=[0.1, 0, 0.3, 0.6, 0]) array([3, 3, 0])  random Generate a uniform random sample from np.arange(5) of size 3 without replacement: >>> np.random.choice(5, 3, replace=False) array([3,1,0])  random >>>  This is equivalent to np.random.permutation(np.arange(5 [:3] Generate a non-uniform random sample from np.arange(5) of size 3 without replacement: >>> np.random.choice(5, 3, replace=False, p=[0.1, 0, 0.3, 0.6, 0]) array([2, 3, 0])  random Any of the above can be repeated with an arbitrary array-like instead of just integers. For instance: >>> aa_milne_arr = ['pooh', 'rabbit', 'piglet', 'Christopher'] >>> np.random.choice(aa_milne_arr, 5, p=[0.5, 0.1, 0.1, 0.3]) array(['pooh', 'pooh', 'pooh', 'Christopher', 'piglet'],  random dtype='<U11')",
"func":1
},
{
"ref":"pyreport.maths.timestamp",
"url":1,
"doc":"",
"func":1
},
{
"ref":"pyreport.maths.generate_tmp",
"url":1,
"doc":"",
"func":1
},
{
"ref":"pyreport.maths.binarytrack",
"url":1,
"doc":"",
"func":1
},
{
"ref":"pyreport.maths.ternarytrack",
"url":1,
"doc":"",
"func":1
},
{
"ref":"pyreport.maths.Variable",
"url":1,
"doc":""
},
{
"ref":"pyreport.maths.Variable.assign",
"url":1,
"doc":"",
"func":1
},
{
"ref":"pyreport.maths.Variable.name",
"url":1,
"doc":""
},
{
"ref":"pyreport.maths.Variable.value",
"url":1,
"doc":""
},
{
"ref":"pyreport.maths.Variable.log",
"url":1,
"doc":"",
"func":1
},
{
"ref":"pyreport.maths.Variable.watch",
"url":1,
"doc":"",
"func":1
},
{
"ref":"pyreport.maths.Variable.unwatch",
"url":1,
"doc":"",
"func":1
},
{
"ref":"pyreport.maths.Variable.is_watching",
"url":1,
"doc":"",
"func":1
},
{
"ref":"pyreport.maths.Variable.identity",
"url":1,
"doc":""
},
{
"ref":"pyreport.maths.Variable.real",
"url":1,
"doc":""
},
{
"ref":"pyreport.maths.Variable.imag",
"url":1,
"doc":""
},
{
"ref":"pyreport.maths.Variable.conjugate",
"url":1,
"doc":"",
"func":1
},
{
"ref":"pyreport.maths.Log",
"url":1,
"doc":""
},
{
"ref":"pyreport.report",
"url":2,
"doc":"A module to create LaTeX reports. This module provides a class to create LaTeX reports. It is based on the LaTeX document classes 'article' and 'report'. The report is created in the 'out' folder and is compiled with 'latexmk'."
},
{
"ref":"pyreport.report.ReportKwargs",
"url":2,
"doc":"A class to hold the arguments for the Reporter class. Constructor for ReportKwargs. Parameters      type: {\"article\", \"report\"}, optional Type of report, by default \"report\". fontsize: {10, 11, 12}, optional Font size, by default 12. columns: {\"onecolumn\", \"twocolumn\"}, optional Number of columns, by default \"onecolumn\". titlepage: {\"notitlepage\", \"titlepage\"}, optional Title page, by default \"notitlepage\". packages: list, optional List of packages to import, by default []. author: str, optional Author of report, by default  . title: str, optional Title of report, by default  . date: str, optional Date of report, by default \"\\today\". maketitle: bool, optional Make title, by default True. maketoc: bool, optional Make table of contents, by default False."
},
{
"ref":"pyreport.report.ReportKwargs.to_dict",
"url":2,
"doc":"Returns a dictionary with the arguments.",
"func":1
},
{
"ref":"pyreport.report.Reporter",
"url":2,
"doc":"A class to create LaTeX reports. Constructor for Reporter. Parameters      report_name : str Name of report. report_kwargs : ReportKwargs Arguments for report."
},
{
"ref":"pyreport.report.Reporter.add_to_document",
"url":2,
"doc":"Adds an object to the document. Parameters      obj : Environment, LaTeXObject Object to add to document.",
"func":1
},
{
"ref":"pyreport.report.Reporter.report",
"url":2,
"doc":"Creates and compiles the report. Raises    ReportError Raised when report cannot be made.",
"func":1
},
{
"ref":"pyreport.report.Reporter.print_structure",
"url":2,
"doc":"Prints the structure of the report.",
"func":1
},
{
"ref":"pyreport.report.ReportError",
"url":2,
"doc":"Raised when report cannot be made."
},
{
"ref":"pyreport.report.Environment",
"url":2,
"doc":"Abstract base class for all environments. Constructor for Environment. Note that this class cannot not be instantiated. Parameters      name : str Name of environment."
},
{
"ref":"pyreport.report.Environment.texify",
"url":2,
"doc":"Writes the environment to a .tex-file. Parameters      file : file File to write to. indent_level : int, optional Indentation level, by default 0.",
"func":1
},
{
"ref":"pyreport.report.Environment.add_to_content",
"url":2,
"doc":"Adds an object to the environment. Parameters      obj : Environment, LaTeXObject Object to add to environment.",
"func":1
},
{
"ref":"pyreport.report.Environment.get_structure",
"url":2,
"doc":"Returns the structure of the environment as a string. Parameters      indent_level : int, optional Indentation level, by default 0.",
"func":1
},
{
"ref":"pyreport.report.Segment",
"url":2,
"doc":"A class to hold the LaTeX chapter, section, subsection, etc. environments. Constructor for Segment. Parameters      name : str Name of segment. segment_type : {\"chapter\", \"section\", \"subsection\", \"subsubsection\", \"paragraph\"} Type of segment. label : str, optional Label of segment, by default  . asterisk : bool, optional Whether to use asterisk, by default False."
},
{
"ref":"pyreport.report.Segment.texify",
"url":2,
"doc":"Writes the environment to a .tex-file. Parameters      file : file File to write to. indent_level : int, optional Indentation level, by default 0.",
"func":1
},
{
"ref":"pyreport.report.Segment.add_to_content",
"url":2,
"doc":"Adds an object to the segment. Parameters      obj : Environment, LaTeXObject Object to add to segment. Raises    TypeError Raised when Segment of lower level is tried to be added.",
"func":1
},
{
"ref":"pyreport.report.Segment.get_structure",
"url":2,
"doc":"Returns the structure of the environment as a string. Parameters      indent_level : int, optional Indentation level, by default 0.",
"func":1
},
{
"ref":"pyreport.report.LaTeXObject",
"url":2,
"doc":"Abstract base class for all LaTeX objects. Constructor for LaTeXObject. Note that this class cannot not be instantiated. Parameters      name : str Name of object."
},
{
"ref":"pyreport.report.LaTeXObject.texify",
"url":2,
"doc":"Writes the object to a .tex-file. Parameters      file : file File to write to. indent_level : int, optional Indentation level, by default 0.",
"func":1
},
{
"ref":"pyreport.report.make_test_report",
"url":2,
"doc":"Creates a test report.",
"func":1
},
{
"ref":"pyreport.symbols",
"url":3,
"doc":"Provides the Symbol and SymbolCollection classes."
},
{
"ref":"pyreport.symbols.Symbol",
"url":3,
"doc":"A class that represents a symbol in plaintext, TeX and Unicode. Constructor for the Symbol class. Parameters      plaintext : str The plaintext representation of the symbol. default_latex : str The default TeX representation of the symbol. default_unicode : str The default Unicode representation of the symbol. alternate_latex : str, optional The alternate TeX representation of the symbol, by default None. alternate_unicode : str, optional The alternate Unicode representation of the symbol, by default None. switch : function, optional A function that returns a boolean value that determines whether to use the alternate representation, by default lambda: False."
},
{
"ref":"pyreport.symbols.Symbol.to_plain",
"url":3,
"doc":"Get the plaintext representation of the symbol.",
"func":1
},
{
"ref":"pyreport.symbols.Symbol.to_tex",
"url":3,
"doc":"Get the TeX representation of the symbol.",
"func":1
},
{
"ref":"pyreport.symbols.Symbol.to_unicode",
"url":3,
"doc":"Get the Unicode representation of the symbol.",
"func":1
},
{
"ref":"pyreport.symbols.SymbolCollection",
"url":3,
"doc":"A class that represents a collection of symbols."
},
{
"ref":"pyreport.symbols.SymbolCollection.get_symbols",
"url":3,
"doc":"Get all symbols in the class.",
"func":1
},
{
"ref":"pyreport.symbols.SymbolCollection.list_symbols",
"url":3,
"doc":"List all symbols in the class.",
"func":1
},
{
"ref":"pyreport.symbols.greek",
"url":4,
"doc":"A module providing the Greek alphabet as symbols."
},
{
"ref":"pyreport.symbols.greek.DEFAULT_VAREPSILON",
"url":4,
"doc":"Switch out the default LaTeX command for epsilon with the alternate one (varepsilon). Default is True."
},
{
"ref":"pyreport.symbols.greek.DEFAULT_VARTHETA",
"url":4,
"doc":"Switch out the default LaTeX command for theta with the alternate one (vartheta). Default is False."
},
{
"ref":"pyreport.symbols.greek.DEFAULT_VARPI",
"url":4,
"doc":"Switch out the default LaTeX command for pi with the alternate one (varpi). Default is False."
},
{
"ref":"pyreport.symbols.greek.DEFAULT_VARRHO",
"url":4,
"doc":"Switch out the default LaTeX command for rho with the alternate one (varrho). Default is False."
},
{
"ref":"pyreport.symbols.greek.DEFAULT_VARPHI",
"url":4,
"doc":"Switch out the default LaTeX command for phi with the alternate one (varphi). Default is True."
},
{
"ref":"pyreport.symbols.greek.Greeks",
"url":4,
"doc":"A collection containing the Greek alphabet as symbols. Attributes      alpha : Symbol The symbol for the small greek letter alpha. beta : Symbol The symbol for the small greek letter beta. gamma : Symbol The symbol for the small greek letter gamma. delta : Symbol The symbol for the small greek letter delta. epsilon : Symbol The symbol for the small greek letter epsilon (depends on DEFAULT_VAREPSILON). varepsilon : Symbol The symbol for the small greek letter varepsilon (depends on DEFAULT_VAREPSILON). zeta : Symbol The symbol for the small greek letter zeta. eta : Symbol The symbol for the small greek letter eta. theta : Symbol The symbol for the small greek letter theta (depends on DEFAULT_VARTHETA). vartheta : Symbol The symbol for the small greek letter vartheta (depends on DEFAULT_VARTHETA). iota : Symbol The symbol for the small greek letter iota. kappa : Symbol The symbol for the small greek letter kappa. lambda_ : Symbol The symbol for the small greek letter lambda. mu : Symbol The symbol for the small greek letter mu. nu : Symbol The symbol for the small greek letter nu. xi : Symbol The symbol for the small greek letter xi. pi : Symbol The symbol for the small greek letter pi (depends on DEFAULT_VARPI). varpi : Symbol The symbol for the small greek letter varpi (depends on DEFAULT_VARPI). rho : Symbol The symbol for the small greek letter rho (depends on DEFAULT_VARRHO). varrho : Symbol The symbol for the small greek letter varrho (depends on DEFAULT_VARRHO). sigma : Symbol The symbol for the small greek letter sigma. tau : Symbol The symbol for the small greek letter tau. upsilon : Symbol The symbol for the small greek letter upsilon. phi : Symbol The symbol for the small greek letter phi (depends on DEFAULT_VARPHI). varphi : Symbol The symbol for the small greek letter varphi (depends on DEFAULT_VARPHI). chi : Symbol The symbol for the small greek letter chi. psi : Symbol The symbol for the small greek letter psi. omega : Symbol The symbol for the small greek letter omega. Gamma : Symbol The symbol for the capital greek letter Gamma. Delta : Symbol The symbol for the capital greek letter Delta. Theta : Symbol The symbol for the capital greek letter Theta. Lambda : Symbol The symbol for the capital greek letter Lambda. Xi : Symbol The symbol for the capital greek letter Xi. Pi : Symbol The symbol for the capital greek letter Pi. Sigma : Symbol The symbol for the capital greek letter Sigma. Upsilon : Symbol The symbol for the capital greek letter Upsilon. Phi : Symbol The symbol for the capital greek letter Phi. Psi : Symbol The symbol for the capital greek letter Psi. Omega : Symbol The symbol for the capital greek letter Omega."
},
{
"ref":"pyreport.symbols.greek.Greeks.alpha",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.beta",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.gamma",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.delta",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.epsilon",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.varepsilon",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.zeta",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.eta",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.theta",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.vartheta",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.iota",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.kappa",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.lambda_",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.mu",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.nu",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.xi",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.pi",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.varpi",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.rho",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.varrho",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.sigma",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.tau",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.upsilon",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.phi",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.varphi",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.chi",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.psi",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.omega",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.Gamma",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.Delta",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.Theta",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.Lambda",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.Xi",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.Pi",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.Sigma",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.Upsilon",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.Phi",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.Psi",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.Omega",
"url":4,
"doc":""
},
{
"ref":"pyreport.symbols.greek.Greeks.get_symbols",
"url":4,
"doc":"Get all symbols in the class.",
"func":1
},
{
"ref":"pyreport.symbols.greek.Greeks.list_symbols",
"url":4,
"doc":"List all symbols in the class.",
"func":1
},
{
"ref":"pyreport.symbols.hebrew",
"url":5,
"doc":"A module providing the Hebrew alphabet as symbols."
},
{
"ref":"pyreport.symbols.hebrew.Hebrews",
"url":5,
"doc":"A collection containing the Hebrew alphabet as symbols. Attributes      aleph : Symbol The symbol for the Hebrew letter aleph. beth : Symbol The symbol for the Hebrew letter beth. daleth : Symbol The symbol for the Hebrew letter daleth. gimel : Symbol The symbol for the Hebrew letter gimel."
},
{
"ref":"pyreport.symbols.hebrew.Hebrews.aleph",
"url":5,
"doc":""
},
{
"ref":"pyreport.symbols.hebrew.Hebrews.beth",
"url":5,
"doc":""
},
{
"ref":"pyreport.symbols.hebrew.Hebrews.daleth",
"url":5,
"doc":""
},
{
"ref":"pyreport.symbols.hebrew.Hebrews.gimel",
"url":5,
"doc":""
},
{
"ref":"pyreport.symbols.hebrew.Hebrews.get_symbols",
"url":5,
"doc":"Get all symbols in the class.",
"func":1
},
{
"ref":"pyreport.symbols.hebrew.Hebrews.list_symbols",
"url":5,
"doc":"List all symbols in the class.",
"func":1
},
{
"ref":"pyreport.symbols.latin",
"url":6,
"doc":"A module providing the Latin alphabet as symbols in various styles."
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols",
"url":6,
"doc":"A collection containing the Latin alphabet as symbols in blackboard style. Attributes      AA : Symbol The symbol for the double-struck capital letter A. BB : Symbol The symbol for the double-struck capital letter B. CC : Symbol The symbol for the double-struck capital letter C. DD : Symbol The symbol for the double-struck capital letter D. EE : Symbol The symbol for the double-struck capital letter E. FF : Symbol The symbol for the double-struck capital letter F. GG : Symbol The symbol for the double-struck capital letter G. HH : Symbol The symbol for the double-struck capital letter H. II : Symbol The symbol for the double-struck capital letter I. JJ : Symbol The symbol for the double-struck capital letter J. KK : Symbol The symbol for the double-struck capital letter K. LL : Symbol The symbol for the double-struck capital letter L. MM : Symbol The symbol for the double-struck capital letter M. NN : Symbol The symbol for the double-struck capital letter N. OO : Symbol The symbol for the double-struck capital letter O. PP : Symbol The symbol for the double-struck capital letter P. QQ : Symbol The symbol for the double-struck capital letter Q. RR : Symbol The symbol for the double-struck capital letter R. SS : Symbol The symbol for the double-struck capital letter S. TT : Symbol The symbol for the double-struck capital letter T. UU : Symbol The symbol for the double-struck capital letter U. VV : Symbol The symbol for the double-struck capital letter V. WW : Symbol The symbol for the double-struck capital letter W. XX : Symbol The symbol for the double-struck capital letter X. YY : Symbol The symbol for the double-struck capital letter Y. ZZ : Symbol The symbol for the double-struck capital letter Z."
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.AA",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.BB",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.CC",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.DD",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.EE",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.FF",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.GG",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.HH",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.II",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.JJ",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.KK",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.LL",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.MM",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.NN",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.OO",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.PP",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.QQ",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.RR",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.SS",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.TT",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.UU",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.VV",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.WW",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.XX",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.YY",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.ZZ",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.get_symbols",
"url":6,
"doc":"Get all symbols in the class.",
"func":1
},
{
"ref":"pyreport.symbols.latin.BlackBoardSymbols.list_symbols",
"url":6,
"doc":"List all symbols in the class.",
"func":1
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols",
"url":6,
"doc":"A collection containing the Latin alphabet as symbols in calligraphic style. Attributes      calA : Symbol The symbol for the calligraphic capital letter A. calB : Symbol The symbol for the calligraphic capital letter B. calC : Symbol The symbol for the calligraphic capital letter C. calD : Symbol The symbol for the calligraphic capital letter D. calE : Symbol The symbol for the calligraphic capital letter E. calF : Symbol The symbol for the calligraphic capital letter F. calG : Symbol The symbol for the calligraphic capital letter G. calH : Symbol The symbol for the calligraphic capital letter H. calI : Symbol The symbol for the calligraphic capital letter I. calJ : Symbol The symbol for the calligraphic capital letter J. calK : Symbol The symbol for the calligraphic capital letter K. calL : Symbol The symbol for the calligraphic capital letter L. calM : Symbol The symbol for the calligraphic capital letter M. calN : Symbol The symbol for the calligraphic capital letter N. calO : Symbol The symbol for the calligraphic capital letter O. calP : Symbol The symbol for the calligraphic capital letter P. calQ : Symbol The symbol for the calligraphic capital letter Q. calR : Symbol The symbol for the calligraphic capital letter R. calS : Symbol The symbol for the calligraphic capital letter S. calT : Symbol The symbol for the calligraphic capital letter T. calU : Symbol The symbol for the calligraphic capital letter U. calV : Symbol The symbol for the calligraphic capital letter V. calW : Symbol The symbol for the calligraphic capital letter W. calX : Symbol The symbol for the calligraphic capital letter X. calY : Symbol The symbol for the calligraphic capital letter Y. calZ : Symbol The symbol for the calligraphic capital letter Z."
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calA",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calB",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calC",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calD",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calE",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calF",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calG",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calH",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calI",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calJ",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calK",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calL",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calM",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calN",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calO",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calP",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calQ",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calR",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calS",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calT",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calU",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calV",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calW",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calX",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calY",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.calZ",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.get_symbols",
"url":6,
"doc":"Get all symbols in the class.",
"func":1
},
{
"ref":"pyreport.symbols.latin.CalligraphicSymbols.list_symbols",
"url":6,
"doc":"List all symbols in the class.",
"func":1
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols",
"url":6,
"doc":"A collection containing the Latin alphabet as symbols in fraktur style. Attributes      frakA : Symbol The symbol for the fraktur capital letter A. frakB : Symbol The symbol for the fraktur capital letter B. frakC : Symbol The symbol for the fraktur capital letter C. frakD : Symbol The symbol for the fraktur capital letter D. frakE : Symbol The symbol for the fraktur capital letter E. frakF : Symbol The symbol for the fraktur capital letter F. frakG : Symbol The symbol for the fraktur capital letter G. frakH : Symbol The symbol for the fraktur capital letter H. frakI : Symbol The symbol for the fraktur capital letter I. frakJ : Symbol The symbol for the fraktur capital letter J. frakK : Symbol The symbol for the fraktur capital letter K. frakL : Symbol The symbol for the fraktur capital letter L. frakM : Symbol The symbol for the fraktur capital letter M. frakN : Symbol The symbol for the fraktur capital letter N. frakO : Symbol The symbol for the fraktur capital letter O. frakP : Symbol The symbol for the fraktur capital letter P. frakQ : Symbol The symbol for the fraktur capital letter Q. frakR : Symbol The symbol for the fraktur capital letter R. frakS : Symbol The symbol for the fraktur capital letter S. frakT : Symbol The symbol for the fraktur capital letter T. frakU : Symbol The symbol for the fraktur capital letter U. frakV : Symbol The symbol for the fraktur capital letter V. frakW : Symbol The symbol for the fraktur capital letter W. frakX : Symbol The symbol for the fraktur capital letter X. frakY : Symbol The symbol for the fraktur capital letter Y. frakZ : Symbol The symbol for the fraktur capital letter Z."
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakA",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakB",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakC",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakD",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakE",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakF",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakG",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakH",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakI",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakJ",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakK",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakL",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakM",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakN",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakO",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakP",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakQ",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakR",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakS",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakT",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakU",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakV",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakW",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakX",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakY",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.frakZ",
"url":6,
"doc":""
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.get_symbols",
"url":6,
"doc":"Get all symbols in the class.",
"func":1
},
{
"ref":"pyreport.symbols.latin.FrakturSymbols.list_symbols",
"url":6,
"doc":"List all symbols in the class.",
"func":1
}
]